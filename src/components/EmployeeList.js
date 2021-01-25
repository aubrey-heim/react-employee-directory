import React from "react";

const styles = {
  email: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    display: 'block',
    lineHeight: '1em', /* a */
    maxHeight: '2 em', /* a x number of line to show (ex : 2 line)  */
  }
}

function ResultList(props) {
  return (
    <div>
      <ul className="list-group list-group-horizontal row text-center">
        <li className="list-group-item col-2"><img alt={`${props.name.first} ${props.name.last}`}style={{width: "100%"}}src={props.picture.large}/></li>
        <li className="employeeList list-group-item col-3" style={styles.span}>{props.name.first} {props.name.last}</li>
        <li className="employeeList list-group-item col-3">{props.cell}</li>
        <li className="employeeList list-group-item col-4" style={styles.email}><a href={`mailto:${props.email}`}>{props.email}</a></li>
      </ul>
    </div>
  );
}

export default ResultList;
