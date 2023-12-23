import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import "../../assets/style/main.css";
import { useSelector } from "react-redux";

function Header() {
  // Get the first name and last name from the Redux store
  const { firstName, lastName } = useSelector((state) => state.userProfile);

  return (
    <header className="header">
      <h1>
        <span>Welcome back</span>
        <span>{` ${firstName} ${lastName} !`}</span>
      </h1>
      <Link to="edit-username">
        <Button className="edit-button" buttonText="Edit Name" />
      </Link>
    </header>
  );
}

export default Header;
