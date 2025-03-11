import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { useProjectServices } from "../../../../services/projectServices";
import { MdDelete } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Swal from "sweetalert2";
import ReactPaginate from "react-paginate";

export const ViewList = (props) => {
  const { createProject, setCreateProject, submit, params } = props;
  const [projectList, setProjectList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(30);
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
      downpayment: data.downpayment,
      paymentplan: data.paymentplan,
      projectkeyword: data.projectkeyword,
      projectdescription: data.projectdescription,
      altprojectlogo: data.altprojectlogo,
      altthumbnail: data.altthumbnail,
      altcoverimage: data.altcoverimage,
      altgallary1: data.altgallary1,
      altgallary2: data.altgallary2,
      altgallary3: data.altgallary3,
    });
  };

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

   const offset = currentPage * itemsPerPage;
   const currentItems = searchedList
     .filter(
       (data) =>
         data.projectname.toLowerCase().includes(searchTerm.toLowerCase()) // Filtering based on search term
     )
     .slice(offset, offset + itemsPerPage);
   const pageCount = Math.ceil(searchedList.length / itemsPerPage);

  const handleDelete = async (id) => {
     const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
     });
    if (result.isConfirmed) {
     try {
       const response = await deleteProjectList(id);
       if (response.sucess) {
         setProjectList((prevList) =>
           prevList.filter((item) => item._id !== id)
         );
         Swal.fire(
           "Deleted!",
           response.message || "Your item has been deleted.",
           "success"
         );
       } else {
         Swal.fire(
           "Failed!",
           response.message || "Failed to delete the item.",
           "error"
         );
       }
     } catch (err) {
       Swal.fire("Error!", "An error occurred while deleting.", "error");
       console.error("Error deleting project:", err);
     }
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
          {currentItems.length > 0 ? (
            currentItems.map((data, i) => (
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

export default ViewList;
