import React, { useState, useEffect } from 'react';

const Page1 = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [gridData, setGridData] = useState([]);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem('gridData');
    if (storedData) {
      setGridData(JSON.parse(storedData));
    }
  }, []);

  // Save data to localStorage whenever gridData changes
  useEffect(() => {
    localStorage.setItem('gridData', JSON.stringify(gridData));
  }, [gridData]);

  const handleAdd = () => {
    if (input1 && input2) {
      setGridData([...gridData, { input1, input2 }]);
      setInput1('');
      setInput2('');
    }
  };

  const handleEdit = (index) => {
    const editedGridData = [...gridData];
    const newData = editedGridData[index];
    setInput1(newData.input1);
    setInput2(newData.input2);
    editedGridData.splice(index, 1);
    setGridData(editedGridData);
  };
  
  const handleDelete = (index) => {
    const updatedGridData = gridData.filter((_, i) => i !== index);
    setGridData(updatedGridData);
  };


  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Input 1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Input 2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
      </div>
      <div className="grid-container">
        {gridData.map((data, index) => (
          <div key={index} className="grid-item">
            <span className='m-3'>{data.input1}</span>
            <span>{data.input2}</span>
            <button className="btn btn-info m-3" onClick={() => handleEdit(index)}>
              Edit
            </button>
            <button className="btn btn-danger" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page1;
