import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { userNewsServices } from '../../../../services/newsServices';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Swal from 'sweetalert2';
import ReactPaginate from 'react-paginate';

export const ViewNewsList = (props) => {
    const { createNews, setCreateNews, submit, params } = props;
    const [newsList, setNewsList] = useState([]);
    const [searchedList, setSearchedList] = useState([]);
       const [searchTerm, setSearchTerm] = useState("");
        const [currentPage, setCurrentPage] = useState(0);
        const [itemsPerPage] = useState(30);
    const { getNews, deleteNews } = userNewsServices();

      useEffect(() => {
        let tempList = newsList;
          tempList = newsList
            .filter((data) => {
              return data.status == params;
            })
            .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setSearchedList(tempList);
      }, [params, newsList]);
    
      useEffect(() => {
        getData();
      }, [submit]);
    
    const location = useLocation();

      const getData = async () => {
        try {
          const response = await getNews();
          if (response.success) {
            const sortedProjects = response.data.sort(
              (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
            );
            setNewsList(sortedProjects);
          }
        } catch (err) {}
    };
    
    const handleEdit = (data) => {
        setCreateNews({
          id: data._id,
          newstitle: data.newstitle,
          newsthumbnail: data.newsthumbnail,
          published: data.published,
          newspara1: data.newspara1,
          newspara2: data.newspara2,
          newspara3: data.newspara3,
          newskeyword: data.newskeyword,
          newsdescription: data.newsdescription,
          newsurl: data.newsurl,
          type: data.type,
          alt: data.alt,
        });
    }

    const handleDelete = async (id) => {
      // Show confirmation dialog first
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
          const response = await deleteNews(id);

          if (response.success) {
            setNewsList((prevList) =>
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
            console.error("Failed to delete news");
          }
        } catch (err) {
          Swal.fire("Error!", "An error occurred while deleting.", "error");
          console.error("Error deleting news:", err);
        }
      }
    };
    
      const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
      };

      const offset = currentPage * itemsPerPage;
      const currentItems = searchedList
        .filter(
          (data) =>
            data.newstitle.toLowerCase().includes(searchTerm.toLowerCase()) // Filtering based on search term
        )
        .slice(offset, offset + itemsPerPage);
      const pageCount = Math.ceil(searchedList.length / itemsPerPage);

  return (
    <div>
      <table className="w-full border overflow-auto">
        <thead>
          <tr>
            <th>News Headline</th>
            <th>Publish Date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((data, i) => (
              <tr key={i}>
                <td>{data.newstitle}</td>
                <td>{data.published}</td>
                <td className="text-center">
                  <MdModeEditOutline
                    onClick={() => handleEdit(data)}
                    className="text-[1rem] text-center m-auto cursor-pointer"
                  />
                </td>
                <td className="text-center">
                  <MdDelete
                    onClick={() => handleDelete(data._id)}
                    className="text-[1rem] text-center m-auto cursor-pointer"
                  />
                </td>
              </tr>
            ))
          ) : (
            <div className="flex justify-center">
              <p className="text-center m-auto">No News updated yet</p>
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

export default ViewNewsList