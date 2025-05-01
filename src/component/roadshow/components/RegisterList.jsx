import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { SiMicrosoftexcel } from "react-icons/si";
import { userRoadshowServices } from "../../../services/roadshowService";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";

export const RegisterList = () => {
  const [registerList, setRegisterList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [eventFilter, setEventFilter] = useState("");
  const [searchedEventList, setSearchedEventList] = useState([]);
  const { getRoadshowRegister, deleteRegister, getRoadshow } =
    userRoadshowServices();
  const location = useLocation();

  useEffect(() => {
    let tempList = registerList;
    setSearchedList(tempList);
  }, [registerList]);

  useEffect(() => {
    getRegisterData();
    getEventData();
  }, []);

  const getRegisterData = async () => {
    try {
      const response = await getRoadshowRegister();
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
        const response = await deleteRegister(id);
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

  useEffect(() => {
    const refreshData = () => {
      if (eventFilter) {
        setSearchedList(
          registerList.filter((item) => item.eventName === eventFilter)
        );
      } else {
        getRegisterData();
      }
    };
    const intervalId = setInterval(refreshData, 30000);

    return () => clearInterval(intervalId);
  }, [eventFilter, registerList]);

  const handleFilterChange = (e) => {
    const selectedEvent = e.target.value;
    setEventFilter(selectedEvent);
    filterList(registerList, selectedEvent);
  };

  const filterList = (list, filter) => {
    if (filter) {
      setSearchedList(list.filter((item) => item.eventName === filter));
    } else {
      setSearchedList(list);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("DNK Real Estate Register List", 14, 10);
    doc.setFontSize(8);
    doc.autoTable({
      startY: 20,
      head: [
        [
          "Event Name",
          "Full Name",
          "Email",
          "Mobile Number",
          "Property Type",
          "Budget",
          "Sourced RM",
          "Attened RM",
          "Event Attended Time",
          "Remark",
        ],
      ],
      body: searchedList.map((data) => [
        data.eventName,
        data.fullName,
        data.email,
        data.phone,
        data.type,
        data.budget,
        data.sourcedRm,
        data.attendedRm,
        new Date(data.updatedAt).toLocaleString(undefined, {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        }),
        data.remark,
      ]),
    });

    doc.save("register_list.pdf");
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      searchedList.map(
        ({
          eventName,
          fullName,
          email,
          phone,
          type,
          budget,
          sourcedRm,
          attendedRm,
          updatedAt,
          remark,
        }) => ({
          "Event Name": eventName,
          "Full Name": fullName,
          "Email ID": email,
          "Mobile Number": phone,
          "Property Type": type,
          "Budget ": budget,
          "Sourced RM": sourcedRm,
          "Attended RM": attendedRm,
          "Event Attended Time": new Date(updatedAt).toLocaleString(undefined, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          }),
          "Remark ": remark,
        })
      )
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Register List");
    XLSX.writeFile(workbook, "register_list.xlsx");
  };

  return (
    <div className="overflow-hidden relative">
      <div className="flex gap-5">
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
      <div className="overflow-x-auto max-h-full">
        <table className="w-full border overflow-auto text-[0.8rem]">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Client Name</th>
              <th>Email</th>
              <th>Mobile Number</th>
              <th>Status</th>
              <th>Property type</th>
              <th>Budget</th>
              <th>Sourced RM</th>
              <th>Attened RM</th>
              <th>Event Attended Time</th>
              <th>Remark</th>
              {location.pathname == "/roadshow/register" && <th></th>}
            </tr>
          </thead>
          <tbody>
            {searchedList.length > 0 ? (
              searchedList.map((data, i) => (
                <tr key={i}>
                  <td>{data.eventName}</td>
                  <td>{data.fullName}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.status}</td>
                  <td>{data.type}</td>
                  <td>{data.budget}</td>
                  <td>{data.sourcedRm}</td>
                  <td>{data.attendedRm}</td>
                  <td>
                    {new Date(data.updatedAt).toLocaleString(undefined, {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                  <td>{data.remark}</td>

                  {location.pathname == "/roadshow/register" && (
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
              <td className="px-4 py-2 text-center">{searchedList.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisterList;
