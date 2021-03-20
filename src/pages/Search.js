import React, { Component } from "react";
// import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
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
    // console.log(employees);
    this.setState({ employees: employees });
    console.log(this.state);
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
    // API.getDogsOfBreed(this.state.search)
    //   .then((res) => {
    //     if (res.data.status === "error") {
    //       throw new Error(res.data.message);
    //     }
    //     this.setState({ results: res.data.message, error: "" });
    //   })
    //   .catch((err) => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By First Name or Last Name!</h1>
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
          <SearchResults employees={this.state.employees} />
        </Container>
      </div>
    );
  }
}

export default Search;
