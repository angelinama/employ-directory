import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";
import Col from "../Col";

function EmployeeTable(props) {
  const [style, setStyle] = useState({
    firstStyle: { opacity: 0.33 },
    lastStyle: { opacity: 0.33 },
  });

  const handleClick = (term) => {
    props.sort(term);
    if (term === "first") {
      setStyle({ lastStyle: { opacity: 0.33 }, firstStyle: { opacity: 1 } });
    } else {
      setStyle({ firstStyle: { opacity: 0.33 }, lastStyle: { opacity: 1 } });
    }
  };

  return (
    <Col size="md-12">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">
              First{" "}
              <span
                onClick={() => {
                  handleClick("first");
                }}
                style={style.firstStyle}
                id="first"
              >
                <FontAwesomeIcon icon={faSortAlphaDown} />
              </span>
            </th>
            <th scope="col">
              Last{" "}
              <span
                onClick={() => {
                  handleClick("last");
                }}
                style={style.lastStyle}
                id="last"
              >
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
    </Col>
  );
}

export default EmployeeTable;
