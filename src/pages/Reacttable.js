
import React, { useState } from "react";
import "./Regular.css";
import checkk from "../assets/images/crossed.png";
import edit from "../assets/images/edit.png";
import user from "../assets/images/heart (1).png";
import SuccessModal from "../components/successmodal";

const initialTableData = [
  { id: 1, name: "Dakota Rice", salary: "$36,738", country: "USA" },
  { id: 2, name: "Minerva Hooper", salary: "$36,738", country: "INDIA" },
  { id: 3, name: "Sage Rodriguez", salary: "$36,738", country: "PAK" },
  { id: 4, name: "Philip Chaney", salary: "$36,738", country: "CANADA" },
];



function Reacttable() {
    const [show, setShow] = useState(false);
    const [tableData, setTableData] = useState(() => {
      const storedData = localStorage.getItem("tableData");
      return storedData ? JSON.parse(storedData) : initialTableData;
    });
    const [editableRowIndex, setEditableRowIndex] = useState(-1);
  
    const handleDelete = (id) => {
      const updatedData = tableData.filter((item) => item.id !== id);
      setTableData(updatedData);
    };
  
    const handleUpdate = (index) => {
      setEditableRowIndex(index);
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      const updatedData = tableData.map((item, index) =>
        index === editableRowIndex ? { ...item, [name]: value } : item
      );
      setTableData(updatedData);
    };
  
    const handleSaveClick = () => {
      setEditableRowIndex(-1);
      localStorage.setItem("tableData", JSON.stringify(tableData));
    };
  
    return (
      <div className="rightside_container">
        <div className="row">
          <div className="col-md-12 table striptable">
            <h6>Striped Table with Hover</h6>
            <p>Here is a subtitle for this table</p>
            {editableRowIndex !== -1 && (
              <button className="btn btn-primary" onClick={handleSaveClick}>Save</button>
            )}
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">NAME</th>
                  <th scope="col">SALARY</th>
                  <th scope="col">COUNTRY</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, index) => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>
                      {editableRowIndex === index ? (
                        <input
                          type="text"
                          name="name"
                          value={item.name}
                          onChange={handleInputChange}
                        />
                      ) : (
                        item.name
                      )}
                    </td>
                    <td>
                      {editableRowIndex === index ? (
                        <input
                          type="text"
                          name="salary"
                          value={item.salary}
                          onChange={handleInputChange}
                        />
                      ) : (
                        item.salary
                      )}
                    </td>
                    <td>
                      {editableRowIndex === index ? (
                        <input
                          type="text"
                          name="country"
                          value={item.country}
                          onChange={handleInputChange}
                        />
                      ) : (
                        item.country
                      )}
                    </td>
                    <td className="action2">
                  
                        <>
                          <img
                            className="Action"
                            src={edit}
                            alt="..."
                            onClick={() => handleUpdate(index)}
                          />
                          <img
                            className="Action1"
                            src={checkk}
                            alt="..."
                            onClick={() => handleDelete(item.id)}
                          />
                          <img
                            className="Action"
                            src={user}
                            alt="..."
                            onClick={() => {
                              setShow(true);
                            }}
                          />
                        </>
                    
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <SuccessModal
              show={show}
              hide={() => {
                setShow(!show);
              }}
              status={"Success"}
              message={"User is successfully logged in"}
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Reacttable;
  
