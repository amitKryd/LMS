import React, { useState } from 'react';

const DataList = () => {
  const [dataList, setDataList] = useState([
    { id: 1, text: 'Data 1', active: false },
    { id: 2, text: 'Data 2', active: false },
    { id: 3, text: 'Data 3', active: false },
    // Add more data items as needed
  ]);

  const toggleActive = (id) => {
    setDataList(dataList.map(item => {
      if (item.id === id) {
        return { ...item, active: !item.active };
      }
      return item;
    }));
  };

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {dataList.map(item => (
          <li
            key={item.id}
            onClick={() => toggleActive(item.id)}
            style={{ textDecoration: item.active ? 'underline' : 'none', cursor: 'pointer' }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
