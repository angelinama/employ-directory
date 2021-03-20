import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <Container classes="form-group">
        <Row>
          <Col size="md-2">
            <label htmlFor="searchTerm" className="font-weight-bold">
              Search for:
            </label>
          </Col>
          <Col size="md-8">
            <input
              value={props.search}
              onChange={props.handleInputChange}
              name="searchTerm"
              type="text"
              className="form-control"
              placeholder="Type in any number of starting letters"
              id="searchTerm"
            />
          </Col>
          <Col size="md-2">
            <button
              type="submit"
              onClick={props.handleFormSubmit}
              className="btn btn-success"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </Col>
        </Row>
      </Container>
    </form>
  );
}

export default SearchForm;
