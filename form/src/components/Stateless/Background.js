import React from "react";
import Signup from "./Signup";
import Submit from "./Submit";
import Input from "../Input";
import "../../App.css";

export const Background = () => {
  return (
    <>
      <div className="center">
        <section className="backgroundSquare">
          <Signup />
          <Input />
          <Submit />
        </section>
      </div>
    </>
  );
};
export default Background;
