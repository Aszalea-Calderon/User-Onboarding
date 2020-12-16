import React from "react";
import Signup from "./Signup";
import Submit from "./Submit";
import "../../App.css";

export const Background = () => {
  return (
    <>
      <div className="center">
        <section className="backgroundSquare">
          <Signup />
          <Submit />
        </section>
      </div>
    </>
  );
};
export default Background;
