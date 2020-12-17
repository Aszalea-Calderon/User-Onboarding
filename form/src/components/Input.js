import React, { useState } from "react";

// const [disabled, setDisabled]= useState(true)

const Input = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    terms: false,
  });
  const change = (e) => {
    const { value, type, checked, name } = e.target; //this is taking in all the info from the input, we are pulling out value type, checked and name
    const valueToUse = type === "checkbox" ? checked : value;
    setForm({ ...form, [name]: valueToUse });
  };

  return (
    <>
      <form>
        <div className="sideBySide">
          <input
            onChange={change}
            value={form.firstName}
            name="firstName"
            className="small"
            type="text"
            placeholder="  First Name"
          ></input>
          <br />
          <input
            onChange={change}
            value={form.lastName}
            name="lastName"
            className="small"
            type="text"
            placeholder="  Last Name"
          ></input>
        </div>
        <br />
        <div className="form">
          <input
            onChange={change}
            value={form.email}
            name="email"
            className="large"
            type="text"
            placeholder="  Email"
          ></input>
          <br />
          <input
            onChange={change}
            value={form.password}
            name="password"
            className="large"
            type="text"
            placeholder="  Password"
          ></input>
          <br />
          <input
            onChange={change}
            value={form.passwordConfirm}
            name="passwordConfirm"
            className="large"
            type="text"
            placeholder="  Confirm Password"
          ></input>
          <br />
          <label>
            <input
              onChange={change}
              value={form.checkbox}
              name="terms"
              className="checkbox"
              type="checkbox"
            ></input>
            Agree to Terms and Conditions
          </label>
        </div>
      </form>
    </>
  );
};

export default Input;
