// MyButton.jsx
import React from "react";
import "./styles/MyButton.css";

const MyButton = ({ value }) => {
  return <button className="my-button">{value}</button>;
};

export default MyButton;