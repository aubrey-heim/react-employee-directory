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
    sortDirection: "up"
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
    console.log(event)
    let keyDown = event.nativeEvent.data
    console.log(keyDown)
    const search = event.target.value
    let phoneSearch = search.replace(/[^a-zA-Z0-9]/g, '')
    let lowerSearch = search.toLowerCase()
    let filteredEmployees = this.state.employees.filter(employee => employee.name.first.toLowerCase().includes(lowerSearch) 
    || employee.name.last.toLowerCase().includes(lowerSearch)
    || employee.email.includes(lowerSearch)
    || employee.cell.replace(/[^a-zA-Z0-9]/g, '').includes(phoneSearch)
    )
    this.setState({
      search: search,
      employeesShown: filteredEmployees
    })
  };

  handleSort = event =>{
    let activeBox = event.target
    if (activeBox.attributes.type.value === "icon") {
      activeBox = event.target.parentElement
    }
    let inactiveBoxes = activeBox.parentElement.childNodes
    inactiveBoxes.forEach(element => element.classList.add("list-group-item-secondary"))
    inactiveBoxes.forEach(element => element.classList.remove("list-group-item-primary"))
    activeBox.classList.add("list-group-item-primary")
    activeBox.classList.remove("list-group-item-secondary")
    let sortBy = activeBox.name
    let sortDirection;
    if (this.state.sortDirection === "up") {
      sortDirection = "down"
    } else {
      sortDirection = "up"
    }
    let sortedEmployees;
    if (sortBy === "name"){
      sortedEmployees = this.state.employees.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1)
    } else if (sortBy === "phone") {
      sortedEmployees = this.state.employees.sort((a, b) => (a.cell < b.cell) ? 1 : -1)
    } else if (sortBy === "email") {
      sortedEmployees = this.state.employees.sort((a, b) => (a.email < b.email) ? 1 : -1)
    }

    if (sortDirection === "down") {
      sortedEmployees.reverse()
    }

    this.setState({
      employeesShown: sortedEmployees,
      sortDirection: sortDirection,
      sortBy: sortBy
    })
  }

  render() {
    return (
      <div className="container">
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <ListHeader handleSort={this.handleSort}/>
        {this.state.employeesShown.map(item => <EmployeeList {...item} key={item.login.uuid}/>)}
      </div>
    );
  }
}

export default EmployeesContainer;
