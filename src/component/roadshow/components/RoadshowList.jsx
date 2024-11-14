import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import { userRoadshowServices } from "../../../services/roadshowService";

export const RoadshowList = (props) => {
  const { setAddRoadshow, submit, params } = props;
  const [roadshowList, setRoadshowList] = useState([]);
  const [searchedRoadshowListList, setSearchedRoadshowList] = useState([]);
  const { getRoadshow, deleteRoadshow } = userRoadshowServices();
  const location = useLocation();

  useEffect(() => {
    let tempList = roadshowList
      .filter((data) => {
        return data.status == params;
      })
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    setSearchedRoadshowList(tempList);
  }, [roadshowList]);

  useEffect(() => {
    getRoadshowData();
  }, [submit]);

  const getRoadshowData = async () => {
    try {
      const response = await getRoadshow();

      if (response.success) {
        const sortedProjects = response.data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        setRoadshowList(sortedProjects);
      }
    } catch (err) {}
  };

  const handleEdit = (data) => {
    setAddRoadshow({
      id: data._id,
      name: data.name,
      address: data.address,
      date: data.date,
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteRoadshow(id);
      if (response.success) {
        setRoadshowList((prevList) =>
          prevList.filter((item) => item._id !== id)
        );
      } else {
        console.error("Failed to delete");
      }
    } catch (err) {
      console.error("Error delete:", err);
    }
  };

  return (
    <div className="overflow-hidden relative">
      <div className="overflow-x-auto max-h-full">
        <table className="w-full border overflow-auto text-[0.8rem]">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event Address</th>
              <th>Event Date</th>
              {location.pathname == "/roadshow/create" && <th></th>}
              {location.pathname == "/roadshow/create" && <th></th>}
            </tr>
          </thead>
          <tbody>
            {searchedRoadshowListList.length > 0 ? (
              searchedRoadshowListList.map((data, i) => (
                <tr>
                  <td>{data.name}</td>
                  <td>{data.address}</td>
                  <td>{data.date}</td>
                  {location.pathname == "/roadshow/create" && (
                    <td className="text-center">
                      <MdModeEditOutline
                        onClick={() => handleEdit(data)}
                        className="text-[1rem] text-center m-auto cursor-pointer"
                      />
                    </td>
                  )}
                  {location.pathname == "/roadshow/create" && (
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
    </div>
  );
};

export default RoadshowList;
