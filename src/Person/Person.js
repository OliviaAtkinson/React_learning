import React from "react";
import "./person.css";

const person = (props) => {
  const style = {
    // //raduim media query
    // "@media (min-width: 500px)": {
    //   width: "450px",
    //   backgroundColor: "pink",
    // },
  };
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
