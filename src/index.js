import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Watermelon", "Mango", "Tangerine"];
const fruits = ["Apple", "Banana", "Strawberry", "Grape", ...citrus];

console.log(fruits);

const fullName = {
  fName: "Sly",
  lName: "Holmes"
};

const user = {
  ...fullName,
  email: "sly@nowalks.com"
};

console.log(user);
