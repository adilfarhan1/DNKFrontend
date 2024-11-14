import React, { useEffect, useState } from "react";
import userProfile from "../../../../assets/icons/userprofile.webp";
import userProfileCover from "../../../../assets/icons/userprofilecover.webp";
import { userTeamServices } from "../../../../services/teamServices";
import Swal from "sweetalert2";
import TeamViewList from "./TeamViewList";
import { URL } from "../../../../url/axios";

export const AddTeam = (props) => {
  const initialState = {
    image: null,
    sliderimg: null,
    name: "",
    position: "",
    experience: "",
    specialization: "",
    language: "",
    email: "",
    phone: "",
    department: "",
    aboutpara1: "",
    aboutpara2: "",
    aboutpara3: "",
  };
  const [createTeam, setCreateTeam] = useState(initialState);
  const [imageUrl, setImageUrl] = useState({
    image: null,
    sliderimg: null,
  });

  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState("");

  // const handleChange = (e) => {
  //   if (e.target.value == "") {
  //     setCreateTeam({ ...createTeam, [e.target.name]: null });
  //   } else {
  //     setCreateTeam({ ...createTeam, [e.target.name]: e.target.value });
  //   }
  // };

  const handleChange = (e) => {
    if (e.target.value === "") {
      setCreateTeam({ ...createTeam, [e.target.name]: null });
    } else {
      setCreateTeam({ ...createTeam, [e.target.name]: e.target.value });
    }
  };

  const { postTeamList, putTeamList, getTeamList, deleteTeamList } =
    userTeamServices();

  useEffect(() => {
    if (props.mode === "update" && props.user_id) {
      fetchTeamDetails(props.user_id);
    }
  }, [props.mode, props.user_id]);

  const fetchTeamDetails = async (id) => {
    try {
      const response = await getTeamList(id);
      const teamData = response.data;
      setCreateTeam(teamData);
      setImageUrl({
        image: teamData.image ? URL + teamData.image : null,
        sliderimg: teamData.sliderimg ? URL + teamData.sliderimg : null,
      });
      console.log("team img url:", setImageUrl());
    } catch (err) {
      console.error("Faild to fetch team details:", err);
    }
  };

  const handleFileInput = (e) => {
    let field = e?.target?.name;
    const file = e.target.files[0];
    setCreateTeam((createTeam) => ({ ...createTeam, [field]: file }));

    setImageUrl((prevState) => ({
      ...prevState,
      [field]: file ? window.URL.createObjectURL(file) : prevState[field],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = { ...createTeam };
      const formdata = new FormData();
      for (const [key, value] of Object.entries(submitData)) {
        if (value instanceof File || typeof value === "string") {
          formdata.append(key, value);
        } else {
          Swal.fire("Failed", "Please upload all images!", "error");
          return;
        }
      }
      // console.log("teamForm -", formdata)
      // console.log("project id -", createTeam.id);

      let response;
      if (createTeam.id) {
        // For update, ensure that the _id field is included
        console.log("teamForm -", formdata);
        console.log("project id -", createTeam.id);
        submitData._id = createTeam.id;
        response = await putTeamList(createTeam.id, formdata);
      } else {
        // For create, remove the _id field to allow MongoDB to generate a new one
        delete submitData._id;
        response = await postTeamList(formdata);
      }
      if (response.success) {
        Swal.fire("Success", "Successfully added/updated", "success");
        handleReset();
        setMessage("Please refresh the page");
        setSubmit(!submit);
        fetchTeamDetails();
      } else {
        Swal.fire("Failed", "Failed to added/updated project", "error");
      }
    } catch (err) {
      console.log(err);
      Swal.fire("Failed", "Failed to added/updated project", "error");
    }
  };

  const handleReset = () => {
    setCreateTeam(initialState);
    setImageUrl({
      image: null,
      sliderimg: null,
      name: null,
      position: null,
      experience: "",
      specialization: "",
      language: "",
      email: "",
      phone: "",
      department: "",
      aboutpara1: "",
      aboutpara2: "",
      aboutpara3: "",
    });
  };

  return (
    <div>
      <div>
        <h1 className="text-[#000] font-semibold">Add Team</h1>
      </div>
      <form
        action="/team/add-team'"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="flex gap-3">
            <div>
              <label htmlFor="userIcon">
                <img
                  className="w-[230px] h-[330px]"
                  src={
                    imageUrl?.image ||
                    (createTeam.image ? URL + createTeam.image : userProfile)
                  }
                  alt="user-icon"
                />
              </label>
              <input
                type="file"
                className="d-none"
                name="image"
                onChange={handleFileInput}
                id="image"
              />
            </div>
            <div>
              <label htmlFor="coverIcon">
                <img
                  className="w-[230px] h-[330px]"
                  src={
                    imageUrl?.sliderimg ||
                    (createTeam.sliderimg
                      ? URL + createTeam.sliderimg
                      : userProfileCover)
                  }
                  alt="user-icon"
                />
              </label>
              <input
                type="file"
                className="d-none"
                name="sliderimg"
                onChange={handleFileInput}
                id="sliderimg"
              />
            </div>
          </div>
          <label>Full Name</label>
          <input
            placeholder="Full Name"
            onChange={handleChange}
            name="name"
            value={createTeam.name || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Position</label>
          <input
            placeholder="Position"
            onChange={handleChange}
            name="position"
            value={createTeam.position || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Year of experience</label>
          <input
            placeholder="Year of experience"
            onChange={handleChange}
            name="experience"
            value={createTeam.experience || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Specialization</label>
          <input
            placeholder="Specialization"
            onChange={handleChange}
            name="specialization"
            value={createTeam.specialization || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Language</label>
          <input
            placeholder="Language"
            onChange={handleChange}
            name="language"
            value={createTeam.language || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>Email</label>
          <input
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={createTeam.email || ""}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />

          <label>Number</label>
          <input
            placeholder="Number"
            onChange={handleChange}
            name="phone"
            value={createTeam.phone}
            type="text"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />

          <label>Department</label>
          <select
            placeholder="Status"
            onChange={handleChange}
            name="department"
            required
            value={createTeam.department || ""}
            type="select"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          >
            <option value={""}></option>
            <option value={"management"}>Management</option>
            <option value={"hr"}>HR Department</option>
            <option value={"marketing"}>Marketing Department</option>
            <option value={"Sales"}>Sales Department</option>
          </select>

          <label>About paragraph 1</label>
          <textarea
            placeholder="Paragraph 1"
            onChange={handleChange}
            name="aboutpara1"
            value={createTeam.aboutpara1 || ""}
            type=""
            cols="30"
            rows="5"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>About paragraph 2</label>
          <textarea
            placeholder="Paragraph 2"
            onChange={handleChange}
            name="aboutpara2"
            value={createTeam.aboutpara2 || ""}
            type=""
            cols="30"
            rows="5"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
          <label>About paragraph 3</label>
          <textarea
            placeholder="Paragraph 3"
            onChange={handleChange}
            name="aboutpara3"
            value={createTeam.aboutpara3 || ""}
            type=""
            cols="30"
            rows="5"
            class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
          />
        </div>
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
            {createTeam.id ? "Update" : "Submit"}
          </button>
          {message && <p>{message}</p>}
        </div>
      </form>
      <TeamViewList {...{ createTeam, setCreateTeam, submit }} />
    </div>
  );
};

export default AddTeam;
