import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { userReviewServices } from "../../../../services/reviewServices";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";

export const ViewReview = (props) => {
  const { addReview, setAddReview, submit, params } = props;
  const [reviewList, setReviewList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const { getReview, deleteReview } = userReviewServices();

  useEffect(() => {
    let tempList = reviewList;
    setSearchedList(tempList);
  }, [params, reviewList]);

  useEffect(() => {
    getData();
  }, [submit]);

  const location = useLocation();

  const getData = async () => {
    try {
      const response = await getReview();
      if (response.success) setReviewList(response.data);
    } catch (err) {}
  };

  const handleEdit = (data) => {
    setAddReview({
      id: data._id,
      image: data.image,
      name: data.name,
      message: data.message,
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteReview(id);
      if (response.success) {
        setReviewList((prevList) => prevList.filter((item) => item._id !== id));
      } else {
        console.error("Failed to delete review");
      }
    } catch (err) {
      console.error("Error deleting review:", err);
    }
  };
  return (
    <div>
      <table className="w-full border overflow-auto my-4 ">
        <thead>
          <tr>
            <th>Name</th>
            <th>message</th>
            {location.pathname == "/dashboard/review" && <th></th>}
            {location.pathname == "/dashboard/review" && <th></th>}
          </tr>
        </thead>
        <tbody>
          {searchedList.length > 0 ? (
            searchedList.map((data, i) => (
              <tr>
                <td>{data.name}</td>
                <td>{data.message}</td>
                {location.pathname == "/dashboard/review" && (
                  <td className="text-center">
                    <MdModeEditOutline
                      onClick={() => handleEdit(data)}
                      className="text-[1rem] text-center m-auto cursor-pointer"
                    />
                  </td>
                )}
                {location.pathname == "/dashboard/review" && (
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

export default ViewReview;
