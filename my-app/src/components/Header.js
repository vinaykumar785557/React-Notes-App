import React from "react";
import Paper from "@material-ui/core/Paper";

function Header() {
  return (
    <Paper style={{ padding: "5px", display: "flex" }} square elevation={3}>
      <img
        style={{ width: "50px", marginRight: "15px" }}
        // src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        src={"https://cdn-icons-png.flaticon.com/512/864/864685.png"}
        alt="logo"
      />
      <h1
        style={{
          margin: "0",
          fontFamily: "Times New Roman",
          fontWeight: "100",
        }}
      >
        Notes App
      </h1>
    </Paper>
  );
}

export default Header;
