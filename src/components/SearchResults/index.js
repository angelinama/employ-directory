import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.employees.map((employee) => (
        <li
          key={employee.name.first + " " + employee.name.last}
          className="list-group-item"
        >
          <img
            alt={employee.name.first}
            src={employee.picture.large}
            className="img-fluid"
          />
          <p className="p">{employee.name.first}</p>
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
