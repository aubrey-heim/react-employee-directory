import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";
import ListHeader from "./ListHeader"

class EmployeesContainer extends Component {
  state = {
    employees: [],
    employeesShown: [],
    search:"",
    sortBy: "",
    sortDirection: ""
  };

  componentDidMount() {
    this.getEmployees(20);
  }

  getEmployees = query => {
    API.search(query)
      .then(res => this.setState({ employees: res.data.results, employeesShown: res.data.results}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const search = event.target.value;
    this.setState({
      search: search
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let phoneSearch = this.state.search.replace(/[^0-9]/g, '')
    let lowerSearch = this.state.search.toLowerCase()
    let filteredEmployees = this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(lowerSearch) 
    || employee.name.last.toLowerCase().includes(lowerSearch)
    || employee.email.includes(lowerSearch)
    || employee.cell.replace(/[^0-9]/g, '').includes(phoneSearch)
    )
    console.log(filteredEmployees)
    this.setState({
      employeesShown: filteredEmployees
    })
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
        {this.state.employeesShown.map(item => <EmployeeList {...item} key={item.login.uuid}/>)}
      </div>
    );
  }
}

export default EmployeesContainer;
