import React, { useEffect, useState } from "react";
import { userRoadshowServices } from "../../../services/roadshowService.js";
import { useLocation } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";

export const ClientRegisterList = () => {
  const [registerList, setRegisterList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [eventFilter, setEventFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedEventList, setSearchedEventList] = useState([]);
  const { getClientRegister, deleteClentRegister, getRoadshow } =
    userRoadshowServices();
  const location = useLocation();

  useEffect(() => {
    let tempList = registerList;
    setSearchedList(tempList);
  }, [registerList]);

  useEffect(() => {
    getClientRegisterData();
    getEventData();
  }, []);

  useEffect(() => {
    filterList(registerList, eventFilter, searchQuery);
  }, [registerList, eventFilter, searchQuery]);

  const getClientRegisterData = async () => {
    try {
      const response = await getClientRegister();
      console.log("register client :", response.data);
      if (response.success) {
        const sortedData = response.data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        setRegisterList(sortedData);
        // Apply filter if eventFilter is set
        if (eventFilter) {
          setSearchedList(
            sortedData.filter((item) => item.eventName === eventFilter)
          );
        } else {
          setSearchedList(sortedData); // Show all data if no filter
        }
      }
    } catch (err) {}
  };

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
        const response = await deleteClentRegister(id);
        if (response.success) {
          setRegisterList((prevList) =>
            prevList.filter((item) => item._id !== id)
          );
          Swal.fire("Deleted!", "Your item has been deleted.", "success");
        } else {
          Swal.fire("Failed!", "Failed to delete the item.", "error");
        }
      } catch (err) {
        Swal.fire("Error!", "An error occurred while deleting.", "error");
        console.error("Error delete:", err);
      }
    }
  };

  const getEventData = async () => {
    try {
      const response = await getRoadshow();

      if (response.success) {
        const sortedData = response.data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );

        setSearchedEventList(sortedData);
      }
    } catch (err) {
      console.error("Error fetching event list:", err);
    }
  };

  const handleFilterChange = (e) => {
    const selectedEvent = e.target.value;
    setEventFilter(selectedEvent);
    filterList(registerList, selectedEvent, searchQuery);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchQuery(term);
    setSearchedList(
      registerList.filter((item) =>
        item.sourcedRm?.toLowerCase().includes(term)
      )
    );
  };

  const filterList = (list, filter, search) => {
    setSearchedList(
      list.filter((item) => {
        const matchesEvent = filter ? item.eventName === filter : true;
        const matchesSearch = search
          ? item.sourcedRm?.toLowerCase().includes(search)
          : true;
        return matchesEvent && matchesSearch;
      })
    );
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("DNK Real Estate Client Register List", 14, 10);
    doc.setFontSize(8);
    doc.autoTable({
      startY: 20,
      head: [
        [
          "Sourced RM",
          "Event Name",
          "Client Name",
          "Email",
          "Mobile Number",
          "Date",
          "Time",
        ],
      ],
      body: searchedList.map((data) => [
        data.sourcedRm,
        data.eventName,
        data.fullName,
        data.email,
        data.phone,
        data.attendDate,
        data.attendTime,
      ]),
    });

    doc.save("register_list.pdf");
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      searchedList.map(
        ({
          sourcedRm,
          eventName,
          fullName,
          email,
          phone,
          attendDate,
          attendTime,
        }) => ({
          "Sourced RM": sourcedRm,
          "Event Name": eventName,
          "Full Name": fullName,
          Email: email,
          "Mobile Number": phone,
          Date: attendDate,
          Time: attendTime,
        })
      )
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Register List");
    XLSX.writeFile(workbook, "register_list.xlsx");
  };

  return (
    <div className="w-full flex items-start justify-center h-full">
      <div className="w-full">
        <div className="bg-[#ffffff] rounded-2xl py-10 px-3 sm:px-6 m-4 relative">
          <div className="overflow-hidden relative">
            <div className="sm:flex gap-5">
              <div className="flex gap-4">
                <button
                  onClick={generatePDF}
                  className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
                >
                  <FaFilePdf />
                </button>
                <button
                  onClick={exportToExcel}
                  className="mb-4 px-4 py-2 bg-green-500 text-white rounded"
                >
                  <SiMicrosoftexcel />
                </button>
              </div>
              <select
                placeholder="Event Location"
                onChange={handleFilterChange}
                value={eventFilter}
                className="w-fit mb-4 border border-[#000000] p-[10px] rounded bg-transparent text-[#000000]"
              >
                <option className="text-[#000000]" value="">
                  Filter Event
                </option>
                {searchedEventList.length > 0 ? (
                  searchedEventList.map((data, i) => (
                    <option
                      key={i}
                      className="text-[#000000]"
                      value={data.name || ""}
                    >
                      {data.name || "No event available"}
                    </option>
                  ))
                ) : (
                  <option className="text-[#000000]" value="">
                    No events available
                  </option>
                )}
              </select>
              <div className="mb-4 w-full md:w-[30%] flex items-center border border-[#000] p-[10px] rounded">
                <input
                  type="text"
                  placeholder="Search Sourced RM name..."
                  className="w-full bg-transparent  text-[#000]"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <IoSearch className="text-[#000] text-[1.2rem]" />
              </div>
            </div>
            <div className="overflow-x-auto max-h-full">
              <table className="w-full border overflow-auto text-[0.8rem]">
                <thead>
                  <tr>
                    <th>Sourced RM</th>
                    <th>Event Name</th>
                    <th>Client Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Date</th>
                    <th>Time</th>
                    {location.pathname == "/roadshow/link" && <th></th>}
                  </tr>
                </thead>
                <tbody>
                  {searchedList.length > 0 ? (
                    searchedList.map((data, i) => (
                      <tr key={i}>
                        <td>{data.sourcedRm}</td>
                        <td>{data.eventName}</td>
                        <td>{data.fullName}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        <td>{data.attendDate}</td>
                        <td>{data.attendTime}</td>

                        {location.pathname ==
                          "/roadshow/clientregisterlist" && (
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
                    <div className="flex justify-center w-full">
                      <div className="bg-[#040406] text-center rounded-3xl p-1">
                        <p className="m-auto loader !w-[24px] !h-[24px]"></p>
                      </div>
                    </div>
                  )}
                  <tr>
                    <th>Total:</th>
                    <td className="px-4 py-2 text-center">
                      {searchedList.length}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientRegisterList;
