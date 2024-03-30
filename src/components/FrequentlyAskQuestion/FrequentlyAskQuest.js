import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const FrequentlyAskQuest = () => {
  const [id, setId] = useState(null);
  const handleDropDown = (id) => {
    setId((prevId) => (prevId === id ? null : id));
  };
  return (
    <div className="bg-orange-100 pb-10 pt-20">
      <div className="w-[70vw] min-h-0 flex items-center  justify-center flex-col m-auto  ">
        <h1 className="text-4xl font-bold mb-4">Frequently asked questions</h1>
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
          return (
            <div key={index}>
              <div
                className={`w-[70vw] flex items-center justify-between border-2 rounded-lg border-gray-200 bg-white p-4 ${
                  id == item ? "bg-blue-100" : "mb-4"
                }`}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque suscipit rhoncus nunc id aliquet.Lorem ipsum dolor sit
                  amet
                </p>
                <IoIosArrowDown
                  className={`cursor-pointer text-2xl  ${
                    id == item
                      ? "delay-50 duration-300 -rotate-180 text-blue-600"
                      : "delay-50 duration-300 rotate-60"
                  } `}
                  onClick={() => handleDropDown(item)}
                />
              </div>
              {id == item && (
                <div className="border rounded-lg border-gray-200 p-4 mb-4 bg-white">
                  <p>
                    This is the first item's accordion body. It is shown by
                    default, until the collapse plugin adds the appropriate
                    classes that we use to style each element. These classes
                    control the overall appearance, as well as the showing and
                    hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also
                    worth noting that just about any HTML can go within the
                    .accordion-body, though the transition does limit overflow.
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
    </div>
  );
};

export default FrequentlyAskQuest;
