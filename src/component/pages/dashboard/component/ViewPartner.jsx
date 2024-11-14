import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { userPartnerServices } from "../../../../services/partnerServices";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import addLogo from "../../../../assets/icons/addlogo.webp";
import { URL } from "../../../../url/axios";

export const ViewPartner = (props) => {
  const { addPartner, setAddPartner, submit, params } = props;
  const [partnerList, setPartnerList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const { getPartner, deletePartner } = userPartnerServices();

  useEffect(() => {
    let tempList = partnerList;
    setSearchedList(tempList);
  }, [params, partnerList]);

  useEffect(() => {
    getData();
  }, [submit]);

  const location = useLocation();

  const getData = async () => {
    try {
      const response = await getPartner();
      if (response.success) {
        setPartnerList(response.data);
      }
    } catch (err) {}
  };

  const handleEdit = (data) => {
    setAddPartner({
      id: data._id,
      image: data.image,
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await deletePartner(id);
      if (response.success) {
        setPartnerList((prevList) =>
          prevList.filter((item) => item._id !== id)
        );
      } else {
        console.error("Failed to delete partner");
      }
    } catch (err) {
      console.error("Error deleting partner:", err);
    }
  };

  return (
    <div>
      <table className="w-full border overflow-auto my-4 ">
        <thead>
          <tr>
            <th>Developer Name</th>
            <th>partners Logo</th>
            {/* {location.pathname == "/dashboard/review" && <th></th>} */}
            {location.pathname == "/dashboard/review" && <th></th>}
          </tr>
        </thead>
        <tbody>
          {searchedList.length > 0 ? (
            searchedList.map((data, i) => (
              <tr>
                <td>
                  <p>
                    {data?.partnername?.replace(/-/g, " ") ||
                      "Partner name not available"}
                  </p>
                </td>
                <td>
                  <img
                    className="m-3  w-[200px] h-[70px] bg-black"
                    src={data.image ? URL + data.image : addLogo}
                    alt="user-icon"
                  />
                </td>
                {/* {location.pathname == "/dashboard/partner" && (
                  <td className="text-center">
                    <MdModeEditOutline
                      onClick={() => handleEdit(data)}
                      className="text-[1rem] text-center m-auto cursor-pointer"
                    />
                  </td>
                )} */}
                {location.pathname == "/dashboard/partner" && (
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
              <p className="text-center m-auto">No review created yet</p>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewPartner;
