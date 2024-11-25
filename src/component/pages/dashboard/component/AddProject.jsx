import React, { useEffect, useState } from "react";
import userProfile from "../../../../assets/icons/userprofile.webp";
import projectImage from "../../../../assets/icons/image_demo.webp";
import logoIcon from "../../../../assets/icons/addlogo.webp";
import ViewList from "./ViewList";
import { useProjectServices } from "../../../../services/projectServices";
import { userPartnerServices } from "../../../../services/partnerServices";
import { FaGlasses } from "react-icons/fa";
import qrcode from "../../../../assets/icons/qrcode.webp";
import Swal from "sweetalert2";
import cvrImage from "../../../../assets/icons/coverimage.webp";
import { URL } from "../../../../url/axios";

export const AddProject = (props) => {
  const [err, setErr] = useState(false);
  const [partnerList, setPartnerList] = useState([]);
  const [searchedDeveloperList, setSearchedDeveloperList] = useState([]);
  const [selectedDeveloperImage, setSelectedDeveloperImage] = useState("");
  const { getPartner, deletePartner, getPartnerName } = userPartnerServices();
  const initialState = {
    projectname: "",
    thumbnail: null,
    developer: "",
    type: "",
    type2: "",
    type3: "",
    type4: "",
    type5: "",
    type6: "",
    bedroom: "",
    handover: "",
    totalarea: "",
    coverimage: null,
    bannertitile: "",
    bannersubtitile: "",
    gallary1: null,
    gallary2: null,
    gallary3: null,
    mainhead: "",
    about: "",
    about1: "",
    about2: "",
    location: "",
    nearby1: "",
    dec1: "",
    nearby2: "",
    dec2: "",
    nearby3: "",
    dec3: "",
    nearby4: "",
    dec4: "",
    status: "",
    startingprice: "",
    locationname: "",
    pointhead: "",
    point1: "",
    point2: "",
    point3: "",
    point4: "",
    point5: "",
    point6: "",
    point7: "",
    point8: "",
    runingstatus: "",
    youtubeid: "",
    developerlogo: "",
    projectlogo: "",
  };

  const [createProject, setCreateProject] = useState(initialState);
  const [imageUrls, setImageUrls] = useState({
    thumbnail: null,
    coverimage: null,
    gallary1: null,
    gallary2: null,
    gallary3: null,
    developerlogo: null,
    projectlogo: null,
  });

  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = async (e) => {
    const { name, value } = e.target;

    if (name === "developer") {
      if (value === "") {
        setCreateProject({ ...createProject, [name]: null, developerlogo: "" });
        setSelectedDeveloperImage("");
      } else {
        try {
          const response = await getPartnerName(value);
          if (response.success) {
            setCreateProject({
              ...createProject,
              [name]: value,
              developerlogo: response.data.image,
            });
            setSelectedDeveloperImage(response.data.image); // Adjust based on your API response structure
          }
        } catch (err) {
          console.error("Error fetching developer image:", err);
        }
      }
    } else {
      setCreateProject({ ...createProject, [name]: value });
    }
    //  if (e.target.value === "") {
    //    setCreateProject({ ...createProject, [e.target.name]: null });
    //  } else {
    //    setCreateProject({ ...createProject, [e.target.name]: e.target.value });
    //  }
  };

  const { postProjectList, putProjectList, getProjectList, deletProjectList } =
    useProjectServices();

  useEffect(() => {
    if (props.mode === "update" && props.user_id) {
      fetchProjectDetails(props.user_id);
    }
    let tempList = partnerList;
    setSearchedDeveloperList(tempList);
  }, [props.mode, props.user_id, partnerList]);

  useEffect(() => {
    getData();
  }, [submit]);

  useEffect(() => {
    console.log("Updated imageUrls - ", imageUrls);
  }, [imageUrls]);

  const getData = async () => {
    try {
      const response = await getPartner();
      if (response.success) {
        setPartnerList(response.data);
      }
    } catch (err) {}
  };
  const fetchProjectDetails = async (id) => {
    try {
      const response = await getProjectList(id);
      setCreateProject(response.data);
      setImageUrls({
        thumbnail: response.data.imageUrl?.thumbnail || null,
        coverimage: response.data.imageUrl?.coverimage || null,
        gallary1: response.data.imageUrl?.gallary1 || null,
        gallary2: response.data.imageUrl?.gallary2 || null,
        gallary3: response.data.imageUrl?.gallary3 || null,
        developerlogo: response.data.imageUrl?.developerlogo || null,
        projectlogo: response.data.imageUrl?.projectlogo || null,
      });
      console.log("images - ", imageUrls);
    } catch (err) {
      console.error("Faild to fetch project details:", err);
    }
  };

  const handleFileInput = (e) => {
    let field = e?.target?.name;
    const file = e.target.files[0];
    setCreateProject((createProject) => ({ ...createProject, [field]: file }));

    setImageUrls((prevState) => ({
      ...prevState,
      [field]: window.URL.createObjectURL(file),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = { ...createProject };
      const formdata = new FormData();
      for (const [key, value] of Object.entries(submitData)) {
        if (value instanceof File || typeof value === "string") {
          formdata.append(key, value);
        }
      }

      let response;
      if (createProject.id) {
        // For update, ensure that the _id field is included
        submitData._id = createProject.id;
        response = await putProjectList(createProject.id, formdata);
      } else {
        // For create, remove the _id field to allow MongoDB to generate a new one
        delete submitData._id;
        response = await postProjectList(formdata);
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
      console.log(err);
      Swal.fire("Failed", "Failed to added/updated project", "error");
    }
  };

  const handleReset = () => {
    setCreateProject(initialState);
    setImageUrls({
      image: null,
      coverimage: null,
      gallary1: null,
      gallary2: null,
      gallary3: null,
      developerlogo: null,
      projectlogo: null,
    });
  };

  return (
    <div>
      <div>
        <h1 className="text-[#000] font-semibold">Add Project</h1>
      </div>
      <form
        action="/task/add-task"
        method="POST"
        enctype="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="w-fit mb-3 grid grid-cols-2 gap-2">
          <div>
            <label>Thumbnail *</label>
            <label htmlFor="thumbnail" className="cursor-pointer">
              <img
                className="w-[380px] h-[266px]"
                src={
                  imageUrls.thumbnail ||
                  (createProject.thumbnail
                    ? URL + createProject.thumbnail
                    : projectImage)
                }
                alt="user-icon"
              />
            </label>
            <input
              type="file"
              placeholder="choose an thumbnail to upload"
              className=""
              name="thumbnail"
              onChange={handleFileInput}
              id="thumbnail"
            />
          </div>
          <div>
            <label>Project Logo *</label>
            <label htmlFor="projectlogo" className="cursor-pointer">
              <img
                className="w-[200px] h-[70px] bg-[#868686]"
                src={
                  imageUrls.projectlogo ||
                  (createProject.projectlogo
                    ? URL + createProject.projectlogo
                    : logoIcon)
                }
                alt="user-icon"
              />
            </label>
            <input
              type="file"
              placeholder="choose an project logo to upload"
              className=""
              name="projectlogo"
              onChange={handleFileInput}
              id="projectlogo"
            />
          </div>
        </div>
        <label>Project Runing Status</label>
        <select
          placeholder="Type "
          onChange={handleChange}
          name="runingstatus"
          value={createProject.runingstatus || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        >
          <option value={" "}></option>
          <option value={"newlaunch"}>New Launch</option>
          <option value={"soldout"}>Sold Out</option>
        </select>
        <label>Status *</label>
        <select
          placeholder="Status"
          onChange={handleChange}
          name="status"
          required
          value={createProject.status || ""}
          type="select"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        >
          <option value={""}></option>
          <option value={"buy"}>Buy</option>
          <option value={"off-plan"}>Off-Plan</option>
          {/* <option value={"sell"}>Sell</option> */}
          <option value={"rent"}>Rent</option>
        </select>

        <label>Project Name *</label>
        <input
          placeholder="Project Name"
          onChange={handleChange}
          name="projectname"
          value={createProject.projectname || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Developer *</label>
        {selectedDeveloperImage ? (
          <div className="developer-image">
            <img
              className="bg-[#000]"
              src={URL + encodeURIComponent(selectedDeveloperImage)}
              alt="Selected Developer"
            />
          </div>
        ) : createProject?.developerlogo ? (
          <img
            className="bg-[#000]"
            src={URL + createProject.developerlogo}
            alt="Developer"
          />
        ) : (
          <p>No developer image available</p> // Optional: Show a fallback message or image
        )}
        <select
          placeholder="Developer"
          onChange={handleChange}
          name="developer"
          value={createProject.developer || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        >
          <option value={""}></option>
          {searchedDeveloperList.length > 0 ? (
            searchedDeveloperList.map((data, i) => (
              <option key={i} value={data.partnername || ""}>
                {data.partnername.replace(/-/g, " ") || "No name available"}
              </option>
            ))
          ) : (
            <option value="">No developer list added</option>
          )}
        </select>

        <label>Type</label>
        <div className="grid grid-cols-6 gap-2">
          <select
            placeholder="Type "
            onChange={handleChange}
            name="type"
            value={createProject.type || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          >
            <option value={""}></option>
            <option value={"apartment"}>Apartment</option>
            <option value={"studio"}>Studio</option>
            <option value={"villa"}>Villa</option>
            <option value={"townhouse"}>Townhouse</option>
            <option value={"penthouse"}>Penthouse</option>
            <option value={"duplex"}>Duplex</option>
            <option value={"PresidentialSuite"}>Presidential Suite</option>
            <option value={"Retail-Space"}>Retail Space</option>
            <option value={"Commercial-Space"}>Commercial Space</option>
            <option value={"Suite"}>Suite</option>
            <option value={"SkyVilla"}>Sky Villa</option>
            <option value={"Plot"}>Plot</option>
          </select>

          <select
            placeholder="Type "
            onChange={handleChange}
            name="type2"
            value={createProject.type2 || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          >
            <option value={""}></option>
            <option value={"apartment"}>Apartment</option>
            <option value={"studio"}>Studio</option>
            <option value={"villa"}>Villa</option>
            <option value={"townhouse"}>Townhouse</option>
            <option value={"penthouse"}>Penthouse</option>
            <option value={"duplex"}>Duplex</option>
            <option value={"Presidential-Suite"}>Presidential Suite</option>
            <option value={"Retail-Space"}>Retail Space</option>
            <option value={"Commercial-Space"}>Commercial Space</option>
            <option value={"Suite"}>Suite</option>
            <option value={"SkyVilla"}>Sky Villa</option>
            <option value={"Plot"}>Plot</option>
          </select>

          <select
            placeholder="Type "
            onChange={handleChange}
            name="type3"
            value={createProject.type3 || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          >
            <option value={""}></option>
            <option value={"apartment"}>Apartment</option>
            <option value={"studio"}>Studio</option>
            <option value={"villa"}>Villa</option>
            <option value={"townhouse"}>Townhouse</option>
            <option value={"penthouse"}>Penthouse</option>
            <option value={"duplex"}>Duplex</option>
            <option value={"PresidentialSuite"}>Presidential Suite</option>
            <option value={"Retail-Space"}>Retail Space</option>
            <option value={"Commercial-Space"}>Commercial Space</option>
            <option value={"Suite"}>Suite</option>
            <option value={"SkyVilla"}>Sky Villa</option>
            <option value={"Plot"}>Plot</option>
          </select>

          <select
            placeholder="Type "
            onChange={handleChange}
            name="type4"
            value={createProject.type4 || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          >
            <option value={""}></option>
            <option value={"apartment"}>Apartment</option>
            <option value={"studio"}>Studio</option>
            <option value={"villa"}>Villa</option>
            <option value={"townhouse"}>Townhouse</option>
            <option value={"penthouse"}>Penthouse</option>
            <option value={"duplex"}>Duplex</option>
            <option value={"PresidentialSuite"}>Presidential Suite</option>
            <option value={"Retail-Space"}>Retail Space</option>
            <option value={"Commercial-Space"}>Commercial Space</option>
            <option value={"Suite"}>Suite</option>
            <option value={"SkyVilla"}>Sky Villa</option>
            <option value={"Plot"}>Plot</option>
          </select>

          <select
            placeholder="Type "
            onChange={handleChange}
            name="type5"
            value={createProject.type5 || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          >
            <option value={""}></option>
            <option value={"apartment"}>Apartment</option>
            <option value={"studio"}>Studio</option>
            <option value={"villa"}>Villa</option>
            <option value={"townhouse"}>Townhouse</option>
            <option value={"penthouse"}>Penthouse</option>
            <option value={"duplex"}>Duplex</option>
            <option value={"PresidentialSuite"}>Presidential Suite</option>
            <option value={"Retail-Space"}>Retail Space</option>
            <option value={"Commercial-Space"}>Commercial Space</option>
            <option value={"Suite"}>Suite</option>
            <option value={"SkyVilla"}>Sky Villa</option>
            <option value={"Plot"}>Plot</option>
          </select>

          <select
            placeholder="Type "
            onChange={handleChange}
            name="type6"
            value={createProject.type6 || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          >
            <option value={""}></option>
            <option value={"apartment"}>Apartment</option>
            <option value={"studio"}>Studio</option>
            <option value={"villa"}>Villa</option>
            <option value={"townhouse"}>Townhouse</option>
            <option value={"penthouse"}>Penthouse</option>
            <option value={"duplex"}>Duplex</option>
            <option value={"PresidentialSuite"}>Presidential Suite</option>
            <option value={"Retail-Space"}>Retail Space</option>
            <option value={"Commercial-Space"}>Commercial Space</option>
            <option value={"Suite"}>Suite</option>
            <option value={"SkyVilla"}>Sky Villa</option>
            <option value={"Plot"}>Plot</option>
          </select>
        </div>
        <label>Bedroom</label>
        <input
          placeholder="1 - 4 BR"
          onChange={handleChange}
          name="bedroom"
          value={createProject.bedroom || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Handover date</label>
        <input
          placeholder="eg: Dec - 2027"
          onChange={handleChange}
          name="handover"
          value={createProject.handover || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Total Area</label>
        <input
          placeholder="eg: 2,319 to 3,324 Sq Ft"
          onChange={handleChange}
          name="totalarea"
          value={createProject.totalarea || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Starting Price *</label>
        <input
          placeholder="eg: AED 1.2M"
          onChange={handleChange}
          name="startingprice"
          value={createProject.startingprice || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <label>Down Payment</label>
        <input
          placeholder="eg: 20%"
          onChange={handleChange}
          name="downpayment"
          value={createProject.downpayment || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <label>Payment Plan</label>
        <input
          placeholder="eg: 80/20"
          onChange={handleChange}
          name="paymentplan"
          value={createProject.paymentplan || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <div className="flex gap-3 mb-4">
          <div className="w-fit mb-3">
            <label>Cover Image *</label>
            <label htmlFor="coverImage" className="cursor-pointer">
              <img
                className="w-[700px] h-[266px]"
                src={
                  imageUrls?.coverimage ||
                  (createProject.coverimage
                    ? URL + createProject.coverimage
                    : cvrImage)
                }
                alt="cover image"
              />
            </label>
            <input
              type="file"
              className=""
              onChange={handleFileInput}
              id="coverImage"
              name="coverimage"
            />
          </div>
        </div>

        <label>Banner title *</label>
        <input
          placeholder="Project name by developer name eg: Sun city By Damac Property"
          type="text"
          name="bannertitile"
          onChange={handleChange}
          value={createProject.bannertitile || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <label>Banner sub title *</label>
        <input
          placeholder="property detailes eg: 1-3 Bedroom Apartment"
          type="text"
          name="bannersubtitile"
          onChange={handleChange}
          value={createProject.bannersubtitile || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <div className="flex gap-2">
          <div className="flex gap-3 mb-4">
            <div className="w-fit mb-3">
              <label>Gallary Image 1 *</label>
              <label htmlFor="Gallary" className="cursor-pointer">
                <img
                  className="w-[380px] h-auto"
                  src={
                    imageUrls.gallary1 ||
                    (createProject.gallary1
                      ? URL + createProject.gallary1
                      : projectImage)
                  }
                  alt="gallary image"
                />
              </label>
              <input
                type="file"
                className=""
                onChange={handleFileInput}
                id="gallaryImage1"
                name="gallary1"
              />
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-fit mb-3">
              <label>Gallary Image 2 *</label>
              <label htmlFor="gallary" className="cursor-pointer">
                <img
                  className="w-[380px] h-auto"
                  src={
                    imageUrls.gallary2 ||
                    (createProject.gallary2
                      ? URL + createProject.gallary2
                      : projectImage)
                  }
                  alt="gallary image"
                />
              </label>
              <input
                type="file"
                className=""
                onChange={handleFileInput}
                id="gallaryImage2"
                name="gallary2"
              />
            </div>
          </div>
          <div className="flex gap-3 mb-4">
            <div className="w-fit mb-3">
              <label>Gallary Image 3 *</label>
              <label htmlFor="gallary" className="cursor-pointer">
                <img
                  className="w-[380px] h-auto"
                  src={
                    imageUrls.gallary3 ||
                    (createProject.gallary3
                      ? URL + createProject.gallary3
                      : projectImage)
                  }
                  alt="gallary image"
                />
              </label>
              <input
                type="file"
                className=""
                onChange={handleFileInput}
                id="gallaryImage3"
                name="gallary3"
              />
            </div>
          </div>
        </div>
        <label>YouTube Link ID</label>
        <input
          placeholder="eg:S1Q2HR8H-EM"
          type="text"
          name="youtubeid"
          onChange={handleChange}
          value={createProject.youtubeid || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <label>Main head</label>
        <input
          placeholder="eg: Elevate your Lifestyle at {property location name}"
          type="text"
          name="mainhead"
          onChange={handleChange}
          value={createProject.mainhead || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <label>About Paragraph 1</label>
        <textarea
          placeholder="About Paragraph 1"
          type="text"
          name="about"
          onChange={handleChange}
          value={createProject.about || ""}
          cols="30"
          rows="5"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <label>About Paragraph 2</label>
        <textarea
          placeholder="About Paragraph 2"
          type="text"
          name="about1"
          onChange={handleChange}
          value={createProject.about1 || ""}
          cols="30"
          rows="5"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <label>About Paragraph 3</label>
        <textarea
          placeholder="About Paragraph 3"
          type="text"
          name="about2"
          onChange={handleChange}
          value={createProject.about2 || ""}
          cols="30"
          rows="5"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <label>Location Name *</label>
        <input
          placeholder="eg: Business Bay, Dubai"
          onChange={handleChange}
          name="locationname"
          value={createProject.locationname || ""}
          type="text"
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <label>Location Map Link</label>
        <input
          placeholder="Google map embed a map src= link "
          type="text"
          name="location"
          onChange={handleChange}
          value={createProject.location || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <div className="grid grid-cols-3 gap-3">
          <div>
            <label>Nearby option1</label>
            <input
              placeholder="eg: School"
              type="text"
              name="nearby1"
              onChange={handleChange}
              value={createProject.nearby1 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
          <div className="col-span-2">
            <label>Nearby option1 Description</label>
            <input
              placeholder="eg: 10 Minutes"
              type="text"
              name="dec1"
              onChange={handleChange}
              value={createProject.dec1 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label>Nearby option2</label>
            <input
              placeholder="eg: School"
              type="text"
              name="nearby2"
              onChange={handleChange}
              value={createProject.nearby2 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
          <div className="col-span-2">
            <label>Nearby option2 Description</label>
            <input
              placeholder="eg: 10 Minutes"
              type="text"
              name="dec2"
              onChange={handleChange}
              value={createProject.dec2 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label>Nearby option3</label>
            <input
              placeholder="eg: School"
              type="text"
              name="nearby3"
              onChange={handleChange}
              value={createProject.nearby3 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
          <div className="col-span-2">
            <label>Nearby option3 Description</label>
            <input
              placeholder="eg: 10 Minutes"
              type="text"
              name="dec3"
              onChange={handleChange}
              value={createProject.dec3 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label>Nearby option4</label>
            <input
              placeholder="eg: School"
              type="text"
              name="nearby4"
              onChange={handleChange}
              value={createProject.nearby4 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
          <div className="col-span-2">
            <label>Nearby option4 Description</label>
            <input
              placeholder="eg: 10 Minutes"
              type="text"
              name="dec4"
              onChange={handleChange}
              value={createProject.dec4 || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
        </div>

        <label>Section Head Name</label>
        <input
          placeholder="Key Highlights"
          type="text"
          name="pointhead"
          onChange={handleChange}
          value={createProject.pointhead || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <input
          placeholder="point 1"
          type="text"
          name="point1"
          onChange={handleChange}
          value={createProject.point1 || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />

        <input
          placeholder="Points 2"
          type="text"
          name="point2"
          onChange={handleChange}
          value={createProject.point2 || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <input
          placeholder="Points 2"
          type="text"
          name="point3"
          onChange={handleChange}
          value={createProject.point3 || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <input
          placeholder="Points 4"
          type="text"
          name="point4"
          onChange={handleChange}
          value={createProject.point4 || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <input
          placeholder="Point 5"
          type="text"
          name="point5"
          onChange={handleChange}
          value={createProject.point5 || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <input
          placeholder="Point 6"
          type="text"
          name="point6"
          onChange={handleChange}
          value={createProject.point6 || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <input
          placeholder="Point 7"
          type="text"
          name="point7"
          onChange={handleChange}
          value={createProject.point7 || ""}
          class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
        />
        <input
          placeholder="point 8"
          type="text"
          name="point8"
          onChange={handleChange}
          value={createProject.point8 || ""}
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
          {createProject.id ? "Update" : "Submit"}
        </button>
        {message && <p>{message}</p>}
      </div>
      <div className="mb-4">
        <ViewList {...{ createProject, setCreateProject, submit }} />
      </div>
    </div>
  );
};

export default AddProject;
