import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { useProjectServices } from "../../../../services/projectServices";
import { MdDelete } from "react-icons/md";

export const ViewList = (props) => {
  const { createProject, setCreateProject, submit, params } = props;
  const [projectList, setProjectList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const { getProjectList, putProjectList, deleteProjectList } =
    useProjectServices();

  useEffect(() => {
    let tempList = projectList;
    if (params !== "allProject" && params) {
      tempList = projectList
        .filter((data) => {
          return data.status == params;
        })
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    }
    setSearchedList(tempList);
  }, [params, projectList]);

  useEffect(() => {
    getData();
  }, [submit]);

  const location = useLocation();

  const getData = async () => {
    try {
      const response = await getProjectList();
      if (response.success) {
        const sortedProjects = response.data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        setProjectList(sortedProjects);
      }

      console.log("project data - ", response.data);
    } catch (err) {}
  };

  const handleEdit = (data) => {
    setCreateProject({
      id: data._id,
      projectname: data.projectname,
      thumbnail: data.thumbnail,
      developer: data.developer,
      type: data.type,
      type2: data.type2,
      type3: data.type3,
      type4: data.type4,
      type5: data.type5,
      type6: data.type6,
      bedroom: data.bedroom,
      handover: data.handover,
      totalarea: data.totalarea,
      handover: data.handover,
      coverimage: data.coverimage,
      bannertitile: data.bannertitile,
      bannersubtitile: data.bannersubtitile,
      gallary1: data.gallary1,
      gallary2: data.gallary2,
      gallary3: data.gallary3,
      mainhead: data.mainhead,
      about: data.about,
      about1: data.about1,
      about2: data.about2,
      startingprice: data.startingprice,
      locationname: data.locationname,
      location: data.location,
      nearby1: data.nearby1,
      dec1: data.dec1,
      nearby2: data.nearby2,
      dec2: data.dec2,
      nearby3: data.nearby3,
      dec3: data.dec3,
      nearby4: data.nearby4,
      dec4: data.dec4,
      status: data.status,
      pointhead: data.pointhead,
      point1: data.point1,
      point2: data.point2,
      point3: data.point3,
      point4: data.point4,
      point5: data.point6,
      point6: data.point6,
      point7: data.point7,
      point8: data.point8,
      runingstatus: data.runingstatus,
      youtubeid: data.youtubeid,
      developerlogo: data.developerlogo,
      projectlogo: data.projectlogo,
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteProjectList(id);
      if (response.success) {
        setProjectList((prevList) =>
          prevList.filter((item) => item._id !== id)
        );
      } else {
        console.error("Failed to delete project");
      }
    } catch (err) {
      console.error("Error deleting project:", err);
    }
  };

  return (
    <div>
      <table className="w-full border overflow-auto">
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Developer</th>
            <th>Type</th>
            <th>Handover Date</th>
            <th>Stutus</th>
            {location.pathname == "/dashboard/addProject" && <th></th>}
            {location.pathname == "/dashboard/addProject" && <th></th>}
          </tr>
        </thead>
        <tbody>
          {searchedList.length > 0 ? (
            searchedList.map((data, i) => (
              <tr>
                <td>{data.projectname}</td>
                <td>{data.developer}</td>
                <td>{data.type}</td>
                <td>{data.handover}</td>
                <td>{data.status}</td>
                {location.pathname == "/dashboard/addProject" && (
                  <td className="text-center">
                    <MdModeEditOutline
                      onClick={() => handleEdit(data)}
                      className="text-[1rem] text-center m-auto cursor-pointer"
                    />
                  </td>
                )}
                {location.pathname == "/dashboard/addProject" && (
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
              <p className="text-center m-auto">Not task created yet</p>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewList;
