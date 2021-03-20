import React from "react";
// import "./style.css";

function EmployeeTable(props) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
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
