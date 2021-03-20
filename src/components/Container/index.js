import React from "react";

function Container(props) {
  return (
    <div
      className={props.classes ? props.classes + " container" : "container"}
      style={props.style}
    >
      {props.children}
    </div>
  );
}

export default Container;
