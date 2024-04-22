import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { faqData } from "../../assests/faq/FaqData";
const FrequentlyAskQuest = () => {
  const [id, setId] = useState(null);
  const handleDropDown = (id) => {
    setId((prevId) => (prevId === id ? null : id));
  };

  const parseHtml = (html) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;

    const strongElement = tempElement.getElementsByTagName("strong");
    for (let i = 0; i < strongElement.length; i++) {
      strongElement[i].style.color = "#3ca5eb";
    }

    return { __html: tempElement.innerHTML };
  };

  return (
    <div className="bg-orange-100 pb-10 pt-20">
      <div className="container mx-auto min-h-0 flex items-center max-sm:items-start max-sm:px-4 flex-col   ">
        <h1 className="text-4xl max-sm:text-2xl font-bold mb-4">
          Frequently asked questions
        </h1>
        {faqData?.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={`w-[70vw] max-sm:w-full flex items-center justify-between border-2 rounded-lg border-gray-200 bg-white p-4 ${
                  id == item ? "bg-blue-100" : "mb-4"
                }`}
              >
                <p dangerouslySetInnerHTML={parseHtml(item.question.__html)} />
                <IoIosArrowDown
                  className={`cursor-pointer text-2xl max-sm:text-3xl  ${
                    id == item
                      ? "delay-50 duration-300 -rotate-180 text-blue-600"
                      : "delay-50 duration-300 rotate-60"
                  } `}
                  onClick={() => handleDropDown(item)}
                />
              </div>
              {id == item && (
                <div className="w-[70vw] max-sm:w-full  border rounded-lg border-gray-200 p-4 mb-4 bg-white">
                  <p dangerouslySetInnerHTML={parseHtml(item.answer.__html)} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FrequentlyAskQuest;
