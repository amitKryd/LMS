import React from "react";

const columns = [
  { key: "course", title: "Course" },
  { key: "date", title: "Date" },
  { key: "total_price", title: "Total Price" },
  { key: "payment_type", title: "Payment Type" },
];

const data = [
  {
    course: "Html, Css and Javascript: The Complete Web Developer Course",
    data: "27 Jun 2023",
    total_price: "₹1800",
    payment_type: "Debit Card",
  },
  {
    course: "Html, Css and Javascript: The Complete Web Developer Course",
    data: "27 Jun 2023",
    total_price: "₹1800",
    payment_type: "Debit Card",
  },
];

const Courses = () => {
  return (
    <div className="container flex  justify-between">
        <table className="">
          <thead className="border-2 border-gray-500">
            <tr className="border-2 border-gray-500">
              {columns.map((item) => {
                return (
                  <th className="border-2 border-gray-500">{item.title}</th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  {columns.map((row) => {
                    return <th>{item[row.key]}</th>;
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
