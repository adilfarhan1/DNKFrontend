import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useProjectServices } from "../../../../services/projectServices";
import { userTeamServices } from "../../../../services/teamServices";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

export const TeamViewList = (props) => {
  const { createTeam, setCreateTeam, submit, params } = props;
  const [teamList, setTeamList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const { getTeamList, putTeamList, deleteTeamList } = userTeamServices();

  useEffect(() => {
    let tempList = teamList;
    setSearchedList(tempList);
  }, [params, teamList]);

  useEffect(() => {
    getData();
  }, [submit]);

  const location = useLocation();

  const getData = async () => {
    try {
      const response = await getTeamList();
      if (response.success) setTeamList(response.data);
    } catch (err) {}
  };

  const handleEdit = (data) => {
    setCreateTeam({
      id: data._id,
      image: data.image,
      sliderimg: data.sliderimg,
      name: data.name,
      position: data.position,
      experience: data.experience,
      specialization: data.specialization,
      language: data.language,
      email: data.email,
      phone: data.phone,
      department: data.department,
      aboutpara1: data.aboutpara1,
      aboutpara2: data.aboutpara2,
      aboutpara3: data.aboutpara3,
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteTeamList(id);
      if (response.success) {
        setTeamList((prevList) => prevList.filter((item) => item._id !== id));
      } else {
        console.error("Failed to delete team member");
      }
    } catch (err) {
      console.error("Error deleting team member:", err);
    }
  };

  return (
    <div>
      <table className="w-full border overflow-auto my-4 ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Specialization</th>
            <th>phone</th>
            {location.pathname == "/dashboard/addTeam" && <th></th>}
            {location.pathname == "/dashboard/addTeam" && <th></th>}
          </tr>
        </thead>
        <tbody>
          {searchedList.length > 0 ? (
            searchedList.map((data, i) => (
              <tr>
                <td>{data.name}</td>
                <td>{data.position}</td>
                <td>{data.department}</td>
                <td>{data.specialization}</td>
                <td>{data.phone}</td>
                {location.pathname == "/dashboard/addTeam" && (
                  <td className="text-center">
                    <MdModeEditOutline
                      onClick={() => handleEdit(data)}
                      className="text-[1rem] text-center m-auto cursor-pointer"
                    />
                  </td>
                )}
                {location.pathname == "/dashboard/addTeam" && (
                  <td className="text-center">
                    <MdDelete
                      onClick={() => handleDelete(data._id)}
                      className="text-[1rem] text-center m-auto cursor-pointer"
                    />
                  </td>
                )}
              </tr>
            ))
          ) : (
            <div className="flex justify-center">
              <p className="text-center m-auto">No task created yet</p>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeamViewList;
