import { useState } from "react";
import { FaCircle } from "react-icons/fa6";

const SalesReport = () => {
  const [value, setValue] = useState("Monthly");
  return (
    <div className=" gap-4 mb-14 bg-white p-3">
      <div className="flex items-center justify-between mt-6">
        <div className="text-2xl font-bold mb-12">Sales Report </div>
        <div>
          <button className=" text-white font-bold flex items-center gap-2">
            <select
              onChange={(e) => setValue(e.target.value)}
              className="bg-[#EA6A12] px-7 py-3  rounded-full"
            >
              <option value="Weekly" selected>
                Weekly
              </option>
              <option value="Monthly">Monthly</option>
            </select>
          </button>
        </div>
      </div>
      {value === "Monthly" ? (
        <div className=" shadow-md sm:rounded-lg overflow-x-scroll">
          <table className="table-auto	">
            <span>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr className="hr-line">
                  <th scope="col" className="px-6 py-3">
                    Month
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3">
                    covers
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Food
                  </th>
                  <th scope="col" className="px-6 py-3">
                    % By Month
                  </th>
                </tr>
              </thead>
            </span>
            <tbody className="flex gap-8">
              <header className="body-wrapper">
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    January
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    February
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    March
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    April
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    May
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    June
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    July
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    August
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    September
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    October
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    November
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    December
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
              </header>
              <div className="flex flex-col static top-0 ">
                <div>
                  <th scope="row" className="px-6 py-4 font-medium ">
                    Estimated square Feet
                  </th>
                  <th>3400</th>
                </div>
                <div>
                  <th scope="row" className="px-6 py-4 font-medium ">
                    Estimated square Feet
                  </th>
                  <th>3400</th>
                </div>
                <div>
                  <th scope="row" className="px-6 py-4 font-medium ">
                    Estimated square Feet
                  </th>
                  <th>3400</th>
                </div>
              </div>
            </tbody>
          </table>
        </div>
      ) : (
        <div className=" shadow-md sm:rounded-lg overflow-x-scroll">
          <table className="table-auto	">
            <span>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr className="hr-line">
                  <th scope="col" className="px-6 py-3">
                    Month
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Customer
                  </th>
                  <th scope="col" className="px-6 py-3">
                    covers
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Food
                  </th>
                  <th scope="col" className="px-6 py-3">
                    % By Month
                  </th>
                </tr>
              </thead>
            </span>
            <tbody className="flex gap-8">
              <header className="body-wrapper">
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    Monday
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    Tuesday
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    Wednesday
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    Thursday
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    Friday
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    Saturday
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
                <tr className="">
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-1xl  whitespace-nowrap "
                  >
                    Sunday
                  </th>

                  <td className="px-6 py-4">
                    <div className="flex flex-col justify-between ">
                      <div className="flex-row flex items-center gap-2">
                        <FaCircle className="text-[#82B941]" /> Lunch
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        <FaCircle className="text-[#EA6A12]" /> Dinner
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span>
                      97
                      <br />
                      157
                    </span>
                  </td>
                  <td className="px-6 py-4">11.8%</td>
                  <div className="flex items-center"></div>
                </tr>
              </header>
              <div className="flex flex-col static top-0 ">
                <div>
                  <th scope="row" className="px-6 py-4 font-medium ">
                    Estimated square Feet
                  </th>
                  <th>3400</th>
                </div>
                <div>
                  <th scope="row" className="px-6 py-4 font-medium ">
                    Estimated square Feet
                  </th>
                  <th>3400</th>
                </div>
                <div>
                  <th scope="row" className="px-6 py-4 font-medium ">
                    Estimated square Feet
                  </th>
                  <th>3400</th>
                </div>
              </div>
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 mb-6">
        <button className="text-xl hover:cursor-pointer hover:underline">
          Week Total
        </button>
      </div>
    </div>
  );
};

export default SalesReport;
