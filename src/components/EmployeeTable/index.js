import React from "react";
// import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";

function EmployeeTable(props) {
  //TODO change this whole function by using hooks
  const handleSort = (e) => {
    const spanEl = e.target.closest("span"); //get ancestor span cuz all the decendents of span is clickable
    e.stopPropagation();

    spanEl.setAttribute("style", "opacity:1");
    if (spanEl.id === "first") {
      props.sort("first");
      //set last span style back to opacity: 0.33
      document.getElementById("last").setAttribute("style", "opacity:0.33");
    } else {
      props.sort("last");
      document.getElementById("first").setAttribute("style", "opacity:0.33");
    }
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">
            First{" "}
            <span onClick={handleSort} style={{ opacity: 0.33 }} id="first">
              <FontAwesomeIcon icon={faSortAlphaDown} />
            </span>
          </th>
          <th scope="col">
            Last{" "}
            <span onClick={handleSort} style={{ opacity: 0.33 }} id="last">
              <FontAwesomeIcon icon={faSortAlphaDown} />
            </span>
          </th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((employee) => (
          <tr key={employee.name.first + " " + employee.name.last}>
            <td>
              <img
                alt={employee.name.first + " " + employee.name.last}
                src={employee.picture.large}
                className="img-fluid"
              />
            </td>
            <td>{employee.name.first}</td>
            <td>{employee.name.last}</td>
            <td>{employee.email}</td>
            {/* TODO:  format cell value for better display */}
            <td>{employee.cell}</td>
            <td>{`${employee.location.city}, ${employee.location.state}, ${employee.location.country}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
