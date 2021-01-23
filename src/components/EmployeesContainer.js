import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class EmployeesContainer extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    this.getEmployees(20);
  }

  getEmployees = query => {
    API.search(query)
      .then(res => this.setState({ results: res.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeList results={this.state.results} />
      </div>
    );
  }
}

export default EmployeesContainer;
