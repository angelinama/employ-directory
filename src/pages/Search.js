import React, { Component } from "react";
// import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import EmployeeTable from "../components/EmployeeTable";
import Alert from "../components/Alert";
import axios from "axios";
class Search extends Component {
  state = {
    search: "",
    employees: [],
    results: [],
    error: "",
  };

  getEmployeeList = async () => {
    const {
      data: { results: employees },
    } = await axios.get("https://randomuser.me/api/?results=30");
    this.setState({ employees: employees, results: employees });
  };

  // When the component mounts, get a list of all employees
  componentDidMount() {
    this.getEmployeeList();
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.setState({
      results: this.state.employees.filter((emp) => {
        return (
          emp.name.first
            .toLowerCase()
            .startsWith(this.state.search.toLowerCase()) ||
          emp.name.last
            .toLowerCase()
            .startsWith(this.state.search.toLowerCase())
        );
      }),
    });
  };

  sortEmployees = (sortBy) => {
    let employees = this.state.employees;
    if (sortBy === "first") {
      employees.sort((a, b) => {
        if (a.name.first > b.name.first) return 1;
        else if (a.name.first < b.name.first) return -1;
        return 0;
      });
    } else {
      employees.sort((a, b) => {
        if (a.name.last > b.name.last) return 1;
        else if (a.name.last < b.name.last) return -1;
        return 0;
      });
    }

    this.setState({ employees: employees });
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h3 className="text-center">Search By First Name or Last Name!</h3>
          <p className="font-weight-bold text-center">
            * Empty search term will relist all employees
          </p>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            search={this.state.search}
          />
          {/* default list is all employee */}
          <EmployeeTable
            employees={this.state.results}
            sort={this.sortEmployees}
          />
        </Container>
      </div>
    );
  }
}

export default Search;
