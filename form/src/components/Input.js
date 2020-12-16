import React from "react";

const Input = () => {
  return (
    <>
      <form>
        <div className="sideBySide">
          <input
            className="small"
            type="text"
            placeholder="  First Name"
          ></input>
          <br />
          <input
            className="small"
            type="text"
            placeholder="  Last Name"
          ></input>
        </div>
        <br />
        <div className="form">
          <input className="large" type="text" placeholder="  Email"></input>
          <br />
          <input className="large" type="text" placeholder="  Password"></input>
          <br />
          <input
            className="large"
            type="text"
            placeholder="  Confirm Password"
          ></input>
          <br />
          <input className="checkbox" type="checkbox"></input>
          <p>Agree to Terms and Conditions</p>
        </div>
      </form>
    </>
  );
};

export default Input;
