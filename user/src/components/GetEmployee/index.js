import React from "react";

function GetEmployee(props) {
  return <div className="list" style={props.style}>{props.children}</div>;
}

export default GetEmployee;
