import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const FrequentlyAskQuest = () => {
  const [id, setId] = useState(null);
  const handleDropDown = (id) => {
    setId((prevId) => (prevId === id ? null : id));
  };
  return (
    <div className="w-[70vw] float-right mb-20  me-20">
      <h1 className="text-4xl font-bold mb-4">Frequently Asked questions</h1>
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <div key={index}>
            <div
              className={`flex justify-between border-2 rounded-lg border-gray-200 p-4 ${
                id == item ? "" : "mb-4"
              }`}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                suscipit rhoncus nunc id aliquet.
              </p>
              <IoIosArrowDown
                className={`cursor-pointer border-0 bg-blue-100 rounded-full text-2xl translate-x-2 ${
                  id == item ? "delay-700 rotate-180" : ""
                } `}
                onClick={() => handleDropDown(item)}
              />
            </div>
            {id == item && (
              <div className="border-2 rounded-lg border-gray-200 p-4 mb-4">
                <p>
                  This is the first item's accordion body. It is shown by
                  default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes
                  control the overall appearance, as well as the showing and
                  hiding via CSS transitions. You can modify any of this with
                  custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the
                  .accordion-body, though the transition does limit overflow.
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FrequentlyAskQuest;
