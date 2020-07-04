import ReactDOM from "react-dom";
import React from "react";
import Lable from "./components/Lable";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Lable />, wrapper) : false;
