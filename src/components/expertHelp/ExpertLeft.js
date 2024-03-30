import React, { useState } from "react";
import { RiArrowDropDownFill } from "react-icons/ri";

export const ExpertLeft = () => {
  return (
    <>
      <div className="expertLeft ">
        <h1 className=" text-black text-4xl font-bold mb-3">Get Expert Help</h1>
        <p className=" font-medium text-gray-500 py-2 font-sans text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          facilisis ipsum at accumsan eleifend. Curabitur et scelerisque magna,
          faucibus bibendum ex. Mauris nisl odio, facilisis{" "}
        </p>
      </div>
      <div>
        <Tabs tabs={expertabs} />
      </div>
    </>
  );
};

// Experts tab 
const expertabs = [
  {
    id: '1',
    title: 'Programming and Software Development',
    content: (
      <div>
        <div className="">
        <div >
          <div class="container mx-auto ">
            <div class="grid grid-cols-1 lg:grid-cols-1  gap-4">
              <div>
                <form class="bg-white  px-1 pt-6 pb-8 mb-4">
                  <div class="grid grid-cols-2 gap-4">
                    <div class="mb-4">
                      <input
                        class="appearance-none border-[2px] border-gray-300 rounded w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none "
                        id="subject"
                        type="text"
                        placeholder="Subject"
                      />
                    </div>
                    <div class="mb-4">
                      <input
                        class="appearance-none border-[2px] border-gray-300 rounded w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none "
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>

                    <div className="mb-4 relative">
                      <select
                        className="appearance-none border-[2px] border-gray-300 rounded w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none  bg-white"
                        id="country"
                      >
                        <option>Country 1</option>
                        <option>Country 2</option>
                        <option>Country 3</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-800">
                        <RiArrowDropDownFill size={34} />
                      </div>
                    </div>

                    <div class="mb-4">
                      <input
                        class="appearance-none border-[2px] border-gray-300 rounded w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none "
                        id="phone"
                        type="text"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div class="mb-4">
                    <textarea
                      class="appearance-none border-[2px] border-gray-300 rounded w-full py-3 px-3 text-gray-800 leading-tight focus:outline-none"
                      rows="5"
                      id="message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div class="flex items-center justify-between">
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none "
                      type="button"
                    >
                      Get Quote
                    </button>
                  </div>
                </form>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      </div>
    ),
  },
  {
    id: '3',
    title: 'Web Development',
    content: (
      <div>
        {/* Content for Data Science and Analytics tab */}
      </div>
    ),
  },
  {
    id: '2',
    title: 'Internet of Things (IoT)',
    content: (
      <div>
        Content for Internet of Things (IoT) tab
      </div>
    ),
  },
  {
    id: '5',
    title: 'Data Science and Analytics',
    content: (
      <div>
        Content for Data Science and Analytics tab
      </div>
    ),
  },

 
  {
    id: '4',
    title: 'Others..',
    content: (
      <div>
        Content for Data Science and Analytics tab
      </div>
    ),
  },

];

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="flex flex-col mt-3">
      <ul className="flex mb-3 flex-wrap max-sm:justify-center gap-4">
        {tabs.map(tab => (
          <li key={tab.id} className="mr-1">
            <button
              className={`${
                activeTab === tab.id ? 'bg-blue-600  border-blue-600 text-white' : 'bg-white'
              } text-gray-700 px-4 py-2 rounded-full hover:bg-blue-500 hover:border-blue-500 hover:text-white  border-gray-300 border-[2px] font-medium max-sm:w-[280px]`}
              onClick={() => handleTabClick(tab.id)}
              aria-selected={activeTab === tab.id ? 'true' : 'false'}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      {/* TabContent */}
      <div className="">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;




