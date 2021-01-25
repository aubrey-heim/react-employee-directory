import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group input-group mb-3 mt-3">
        <span htmlFor="search" className="input-group-text bg-info text-white" id="basic-addon1">Search:</span>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search by name, phone-number, or email"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
