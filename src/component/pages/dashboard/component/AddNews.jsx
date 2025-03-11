import React, { useEffect, useState } from 'react'
import newsImage from "../../../../assets/icons/image_demo.webp";
import { URL } from "../../../../url/axios";
import { userNewsServices } from '../../../../services/newsServices';
import Swal from 'sweetalert2';
import ViewNewsList from './ViewNewsList';
 
export const AddNews = (props) => {
  const [err, setErr] = useState(false);
  const initialState = {
    newstitle: "",
    newsthumbnail: null,
    published: "",
    newspara1: "",
    newspara2: "",
    newspara3: "",
    newskeyword: "",
    newsdescription: "",
    newsurl: "",
    type: "",
    alt: "",
  };

  const [createNews, setCreateNews] = useState(initialState);
  const [imageUrls, setImageUrls] = useState({
    newsthumbnail: null,
  });

  const [error, setError] = useState("");

  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState("");
  const [urlError, setUrlError] = useState("");
  const [formErrors, setFormErrors] = useState({
    newstitle: "",
    newsthumbnail: "",
    published: "",
    newspara1: "",
    newspara2: "",
    newspara3: "",
    newsurl: "",
    type: "",
  });

  const handleChange = (e) => {
    if (e.target.value === "") {
      setCreateNews({ ...createNews, [e.target.name]: null });
    } else {
      setCreateNews({ ...createNews, [e.target.name]: e.target.value });
    }
  };

  const { postNews, getNews, putNews } = userNewsServices();

  useEffect(() => {
    if (props.mode === "update" && props.user_id) {
      fetchProjectDetails(props.user_id);
    }
  }, [props.mode, props.user_id]);

  useEffect(() => {
  }, [imageUrls]);

  const fetchProjectDetails = async (id) => {
    try {
      const response = await getNews(id);
      setCreateNews(response.data);
      setImageUrls({
        newsthumbnail: response.data.imageUrl?.newsthumbnail || null,
      });
    } catch (err) {
      console.error("Faild to fetch News details:", err);
    }
  };

  const handleFileInput = (e) => {
    let field = e?.target?.name;
    const file = e.target.files[0];
    setCreateNews((createNews) => ({ ...createNews, [field]: file }));

    setImageUrls((prevState) => ({
      ...prevState,
      [field]: window.URL.createObjectURL(file),
    }));
  };

  const validateForm = async () => {
    const {
      newstitle,
      newsthumbnail,
      published,
      newsurl,
      type,
    } = createNews;
    const forbiddenSymbols = /[^a-zA-Z0-9\- ]/;
    let errors = { ...formErrors };

    // Validate each field and set error messages
    if (!newstitle) {
      errors.newstitle = "Title is required.";
    } else {
      errors.newstitle = "";
    }

    if (!newsthumbnail) {
      errors.newsthumbnail = "Thumbnail is required.";
    } else {
      errors.newsthumbnail = "";
    }

    if (!published) {
      errors.published = "Publish date is required.";
    } else {
      errors.published = "";
    }


    if (!newsurl) {
      errors.newsurl = "URL is required.";
    } else if (forbiddenSymbols.test(newsurl)) {
      errors.newsurl =
        "The URL contains invalid characters. Please use only alphanumeric characters .";
    } else {
      errors.newsurl = "";
    }

    if (!type) {
      errors.type = "Type is required.";
    } else {
      errors.type = "";
    }

    setFormErrors(errors);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
     const isValid = await validateForm();
       try {
         const submitData = { ...createNews };
         const formdata = new FormData();
         for (const [key, value] of Object.entries(submitData)) {
           if (value instanceof File || typeof value === "string") {
             formdata.append(key, value);
           }
         }

         let response;
         if (createNews.id) {
           // For update, ensure that the _id field is included
           submitData._id = createNews.id;
           response = await putNews(createNews.id, formdata);
         } else {
           // For create, remove the _id field to allow MongoDB to generate a new one
           delete submitData._id;
           response = await postNews(formdata);
         }
         if (response.success) {
           Swal.fire("Success", "Successfully added/updated", "success");
           handleReset();
           setMessage("Please refresh the page");
           setSubmit(!submit);
           fetchProjectDetails();
         } else {
           Swal.fire("Failed", "Failed to added/updated project", "error");
         }
       } catch (err) {
         if (err.response && err.response.data.message) {
           setError(err.response.data.message); // Show error message from backend
           Swal.fire("Error", err.response.data.message, "error");
         } else {
           Swal.fire("Error", "An error occurred. Please try again.", "error");
         }
       }
  
    
   
  };

  const handleReset = () => {
    setCreateNews(initialState);
    setImageUrls({
      image: null,
    });
  };

  return (
    <div>
      <div>
        <h1 className="text-[#000] font-semibold">Add News</h1>
      </div>
      <form
        action="/task/add-task"
        method="POST"
        enctype="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div>
          <div>
            <label>News thumbnail *</label>
            <label htmlFor="newsthumbnail" className="cursor-pointer">
              <img
                className="w-[380px] h-[266px]"
                src={
                  imageUrls.newsthumbnail ||
                  (createNews.newsthumbnail
                    ? URL + createNews.newsthumbnail
                    : newsImage)
                }
                alt="user-icon"
              />
            </label>
            <input
              type="file"
              placeholder="choose an news thumbnail to upload"
              className=""
              name="newsthumbnail"
              onChange={handleFileInput}
              id="newsthumbnail"
            />
          </div>

          {formErrors.newsthumbnail && (
            <span className="erro text-red-600 text-[0.8rem]">
              {formErrors.newsthumbnail}
            </span>
          )}
        </div>
        <div className="mb-[25px]">
          <label>News headline *</label>
          <input
            placeholder="News headline"
            onChange={handleChange}
            name="newstitle"
            value={createNews.newstitle || ""}
            type="text"
            className="w-full  border border-[#040406] p-[10px] rounded "
          />
          {formErrors.newstitle && (
            <span className="error text-red-600 text-[0.8rem]">
              {formErrors.newstitle}
            </span>
          )}
        </div>

        <div className="mb-[25px]">
          <label>News Type*</label>
          <select
            placeholder="News type "
            onChange={handleChange}
            name="type"
            value={createNews.type || ""}
            type="text"
            className="w-full  border border-[#040406] p-[10px] rounded "
          >
            <option value={""}></option>
            <option value={"Market Insights"}>Market Insights</option>
            <option value={"General"}>General</option>
            <option value={"News"}>News</option>
            <option value={"Off-Plan"}>Off-Plan</option>
          </select>
          {formErrors.type && (
            <span className="error  text-red-600 text-[0.8rem]">
              {formErrors.type}
            </span>
          )}
        </div>

        <div className="mb-[25px]">
          <label>Publish Date *</label>
          <input
            placeholder="eg: Sun 05 Jan 2025"
            onChange={handleChange}
            name="published"
            value={createNews.published || ""}
            type="text"
            className="w-full  border border-[#040406] p-[10px] rounded"
          />
          {formErrors.published && (
            <span className="error text-red-600 text-[0.8rem]">
              {formErrors.published}
            </span>
          )}
        </div>

        <label>Paragraph 1</label>
        <textarea
          placeholder="Paragraph 1"
          type="text"
          name="newspara1"
          onChange={handleChange}
          value={createNews.newspara1 || ""}
          cols="30"
          rows="5"
          className="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Paragraph 2</label>
        <textarea
          placeholder="Paragraph 2"
          type="text"
          name="newspara2"
          onChange={handleChange}
          value={createNews.newspara2 || ""}
          cols="30"
          rows="5"
          className="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Paragraph 3</label>
        <textarea
          placeholder="Paragraph 3"
          type="text"
          name="newspara3"
          onChange={handleChange}
          value={createNews.newspara3 || ""}
          cols="30"
          rows="5"
          className="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <label className="font-bold underline">SEO</label>
        <div className="mb-[25px]">
          <label>Canonical URL</label>
          <input
            placeholder="website URL Name - uniqe name and dont use symbols [^, $, -, !]"
            type="text"
            name="newsurl"
            onChange={handleChange}
            value={createNews.newsurl || ""}
            className="w-full  border border-[#040406] p-[10px] rounded"
          />
          {formErrors.newsurl && (
            <span className="error text-red-600 text-[0.8rem]">
              {formErrors.newsurl}
            </span>
          )}
          {urlError && (
            <span className="error text-red-600 text-[0.8rem]">{urlError}</span>
          )}
        </div>
        <label>Keywords</label>
        <input
          placeholder="Keywords eg: Damac, riverside, ..."
          type="text"
          name="newskeyword"
          onChange={handleChange}
          value={createNews.newskeyword || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Description</label>
        <textarea
          placeholder="News Description"
          type="text"
          name="newsdescription"
          onChange={handleChange}
          value={createNews.newsdescription || ""}
          cols="30"
          rows="5"
          className="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Alt Image</label>
        <input
          placeholder="Image alt name"
          type="text"
          name="alt"
          onChange={handleChange}
          value={createNews.alt || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
      </form>
      {err && <span>{err}</span>}

      <div className="mb-3 flex gap-4 justify-end">
        <button
          onClick={handleReset}
          className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff]"
        >
          Clear
        </button>
        <button
          onClick={handleSubmit}
          className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff]"
        >
          {createNews.id ? "Update" : "Submit"}
        </button>
        {message && <p>{message}</p>}
      </div>
      <div className="mb-4">
        <ViewNewsList {...{ createNews, setCreateNews, submit }} />
      </div>
    </div>
  );
};

export default AddNews