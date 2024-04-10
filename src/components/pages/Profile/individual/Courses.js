import React from "react";
import JoinFreeBtn from "../../../button/PrimaryButton";

const columns = [
  { key: "course", title: "Course" },
  { key: "date", title: "Date" },
  { key: "total_price", title: "Total Price" },
  { key: "payment_type", title: "Payment Type" },
  { key: "invoice", title: "Invoice" },
];

const data = [
  {
    course: "Html, Css and Javascript: The Complete Web Developer Course",
    date: "27 Jun 2023",
    total_price: "₹1800",
    payment_type: "Debit Card",
  },
  {
    course: "Html, Css and Javascript: The Complete Web Developer Course",
    date: "27 Jun 2023",
    total_price: "₹1800",
    payment_type: "Debit Card",
  },
  
];

const Courses = () => {
  return (
    <div className="container overflow-x-auto">
      <table className="w-full">
        <thead className="border-b-2 border-gray-200">
          <tr className="flex items-center justify-around p-6">
            {columns.map((item, index) => {
              return (
                <th key={index} className="ms-10 me-10">
                  {item.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="">
          {data.map((item, rowIndex) => {
            return (
              <tr
                key={rowIndex}
                className="flex items-center border-b-2 border-gray-200 p-8 "
              >
                {columns.map((col, colIndex) => {
                  return (
                    <th key={colIndex} className={`w-[30%]`}>
                      {col?.key === "invoice" ? (
                        <JoinFreeBtn
                          title={"Download Invoice"}
                          bgColor={"bg-blue-600"}
                          color={"text-white"}
                        />
                      ) : (
                        item[col.key]
                      )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
