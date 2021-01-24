import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";
import ListHeader from "./ListHeader"

class EmployeesContainer extends Component {
  state = {
    employees: [],
    search:"",
    sortBy: "",
    sortDirection: ""
  };

  componentDidMount() {
    this.getEmployees(20);
  }

  getEmployees = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

  };

  handleSort = event =>{

  }

  render() {
    return (
      <div className="container">
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ListHeader handleSort={this.handleSort}/>
        {this.state.employees.map(item => <EmployeeList {...item} key={item.login.uuid}/>)}
      </div>
    );
  }
}

export default EmployeesContainer;
