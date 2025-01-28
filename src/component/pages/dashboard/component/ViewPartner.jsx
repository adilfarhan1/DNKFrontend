import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { userPartnerServices } from "../../../../services/partnerServices";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import addLogo from "../../../../assets/icons/addlogo.webp";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { URL } from "../../../../url/axios";
import ReactPaginate from "react-paginate";

export const ViewPartner = (props) => {
  const { addPartner, setAddPartner, submit, params } = props;
  const [partnerList, setPartnerList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
      const [currentPage, setCurrentPage] = useState(0);
      const [itemsPerPage] = useState(10);
  const { getPartner, deletePartner } = userPartnerServices();

  useEffect(() => {
    let tempList = partnerList;
      tempList = partnerList
        .filter((data) => {
          return data.status == params;
        })
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
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
         const sortedProjects = response.data.sort(
           (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
         );
        setPartnerList(sortedProjects);
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

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = searchedList
    .filter(
      (data) =>
        data.partnername.toLowerCase().includes(searchTerm.toLowerCase()) // Filtering based on search term
    )
    .slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(searchedList.length / itemsPerPage);

  return (
    <div>
      <table className="w-full border overflow-auto my-4 ">
        <thead>
          <tr>
            <th>Developer Name</th>
            <th>Partners Logo</th>
            {/* {location.pathname == "/dashboard/review" && <th></th>} */}
            {location.pathname == "/dashboard/review" && <th></th>}
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((data, i) => (
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

      {/* Pagination */}
      <div className="flex justify-center mt-5 pagination-block">
        <ReactPaginate
          className="flex text-[#000]"
          previousLabel={<IoIosArrowBack className="text-[1.5rem]" />}
          nextLabel={<IoIosArrowForward className="text-[1.5rem]" />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousClassName={"previous-button"}
          nextClassName={"next-button"}
          disabledClassName={"disabled"}
        />
      </div>
    </div>
  );
};

export default ViewPartner;
