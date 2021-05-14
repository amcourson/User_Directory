import React from "react";
import Navbar from "../components/Navbar"

function Container(props) {
  return <div className="container" style={props.style}>{props.children};
<Navbar/>
</div>
}

export default Container;
