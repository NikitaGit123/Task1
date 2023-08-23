import React, { useState } from 'react';

const Page2 = () => {
  const [employeeInfo, setEmployeeInfo] = useState({
    name: '',
    number: '',
    email: '',
    code: '',
    department: '',
  });

  const [gridData, setGridData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleFormSubmit = () => {
    if (employeeInfo.name && employeeInfo.number && employeeInfo.email) {
      if (editIndex === -1) {
        setGridData([...gridData, employeeInfo]);
      } else {
        const updatedGridData = [...gridData];
        updatedGridData[editIndex] = employeeInfo;
        setGridData(updatedGridData);
        setEditIndex(-1);
      }

      setEmployeeInfo({
        name: '',
        number: '',
        email: '',
        code: '',
        department: '',
      });
    }
  };

  const handleEdit = (index) => {
    const selectedEmployee = gridData[index];
    setEmployeeInfo(selectedEmployee);
    setEditIndex(index);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Employee Name"
          value={employeeInfo.name}
          onChange={(e) => setEmployeeInfo({ ...employeeInfo, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Employee Number"
          value={employeeInfo.number}
          onChange={(e) => setEmployeeInfo({ ...employeeInfo, number: e.target.value })}
        />
        <input
          type="text"
          placeholder="Employee Email"
          value={employeeInfo.email}
          onChange={(e) => setEmployeeInfo({ ...employeeInfo, email: e.target.value })}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleFormSubmit}
        >
          {editIndex === -1 ? 'Add to Grid' : 'Update Entry'}
        </button>
      </form>
      <div className="grid-container">
        {gridData.map((data, index) => (
          <div key={index} className="grid-item">
            <span>Name: {data.name}</span>
            <span>Number: {data.number}</span>
            <span>Email: {data.email}</span>
            <button
              className="btn btn-info"
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
