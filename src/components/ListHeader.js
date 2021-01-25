import React from "react";

function ListHeader(props) {
  return (
    <div>
      <ul className="list-group list-group-horizontal row text-center" style={{fontSize:"20px"}}>
        <li className="list-group-item list-group-item-secondary col-2">Photo</li>
        <button type="button" name="name" onClick={props.handleSort} className="list-group-item list-group-item-secondary col-3">Name <i type="icon" className="fas fa-sort"></i></button>
        <button type="button" name="phone" onClick={props.handleSort} className="list-group-item list-group-item-secondary col-3">Phone <i type="icon" className="fas fa-sort"></i></button>
        <button type="button" name="email" onClick={props.handleSort} className="list-group-item list-group-item-secondary col-4">Email <i type="icon" className="fas fa-sort"></i></button>
      </ul>
    </div>
  );
}

export default ListHeader;