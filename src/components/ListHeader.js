import React from "react";

function ListHeader() {
  return (
    <div>
      <ul className="list-group list-group-horizontal row text-center" style={{fontSize:"20px"}}>
        <li className="list-group-item list-group-item-secondary col-2">Photo</li>
        <li className="list-group-item list-group-item-secondary col-3">Name <i className="fas fa-sort"></i></li>
        <li className="list-group-item list-group-item-secondary col-3">Phone <i className="fas fa-sort"></i></li>
        <li className="list-group-item list-group-item-secondary col-4">Email <i className="fas fa-sort"></i></li>
      </ul>
    </div>
  );
}

export default ListHeader;