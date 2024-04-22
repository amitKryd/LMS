import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export const AppSidebarNav = ({ items }) => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [openItems, setOpenItems] = useState([]);
  const [openItem, setOpenItem] = useState(null);
  const [openSubItems, setOpenSubItems] = useState({}); // Define openSubItems state here
  const [count,setCount] =  useState(false)

  useEffect(() => {
    setActiveIcon(null); // Reset activeIcon when items change
  }, [items]);

  const handleItemClick = (icon, itemName) => {
    setActiveIcon(icon);

    // Close all sub-items
    setOpenSubItems({});
    
    if (openItem === itemName) {
      setOpenItem(null);
      setCount((data)  => !data)
    } else {
      // Otherwise, open the clicked item and close the previously open one
      setOpenItem(itemName);
      setCount((data)  => !data)
    }

    setOpenItems((prevOpenItems) => {
      if (prevOpenItems.includes(itemName)) {
        return prevOpenItems.filter((item) => item !== itemName);
      } else {
        return [...prevOpenItems, itemName];
      }
    });
  };

  const handleSubItemClick = (subItemName, itemName) => {
    setOpenSubItems((prevOpenSubItems) => {
      const itemSubItems = prevOpenSubItems[itemName] || [];
      if (itemSubItems.includes(subItemName)) {
        return {
          ...prevOpenSubItems,
          [itemName]: itemSubItems.filter((subItem) => subItem !== subItemName),
        };
      } else {
        return {
          ...prevOpenSubItems,
          [itemName]: [...itemSubItems, subItemName],
        };
      }
    });
  };

  const renderNavLink = (item) => {
    const { name, icon, iconTwo, ...rest } = item;

    return (
      <div key={name} className='flex px-2 py-2  hover:bg-gray-100'>
        {rest.to || rest.href ? (
          <NavLink
            className={`flex  cursor-pointer no-underline text-gray-700 `}
            // activeClassName='bg-gray-200'
            {...rest}
            onClick={() => handleItemClick(icon, name)}
          >
            {renderIcon(icon, iconTwo)}
            {/* <span className={`${activeIcon === icon ? 'text-blue-500' : ''}`}>{name}</span> */}
            <span>{name}</span>
          </NavLink>
        ) : (
          <div className='flex'>
            {renderIcon(icon, iconTwo)}
            {name}
          </div>
        )}
      </div>
    );
  };

  const renderIcon = (icon, iconTwo) => {
    return activeIcon === icon ? iconTwo : icon;
  };

  const renderNavItem = (item) => {
    const isOpen = openItem === item.name || openItems.includes(item.name) ;

    return (
      <div key={item.name}>
        {item.items ? (
          <div
            className='cursor-pointer px-2 py-2 hover:bg-gray-100'
            onClick={() => handleItemClick(item.icon, item.name)}
          >
            <div className='flex items-center justify-between'>
              <div className='flex'>
                <span>{renderIcon(item.icon, item.iconTwo)}</span>
                <span className={` ${activeIcon === item?.icon ? 'text-blue-500' : ''}`}>{item.name}</span>
              </div>
              <span>
                {isOpen ? (
                  <FiChevronUp className={` ${activeIcon === item?.icon ? 'text-blue-500' : ''}`} />
                ) : (
                  <FiChevronDown className={` ${activeIcon === item?.icon ? 'text-blue-500' : ''}`} />
                )}
              </span>
            </div>
          </div>
        ) : (
          renderNavLink(item)
        )}
        {(isOpen && item?.items) && (
          <div
            className={`flex flex-col transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'
            }`}
          >
            {item?.items?.map((subItem, index) => (
              <span
                key={subItem.name}
                className={`px-4 hover:bg-gray-100 `}
              >
                {renderNavLink(subItem)}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div as={SimpleBar} className='flex flex-col px-2 py-2'>
      {items.map((item) => renderNavItem(item))}
    </div>
  );
};

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};
