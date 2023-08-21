import React from "react";
import { Chrono } from "react-chrono";
import "./styles.css";

export const Vertical = (args) => {
  return (
    <section className="wrapper">
      <div className="vertical-container">
        <Chrono {...args} fontSizes={{title: "1rem"}} />
      </div>
    </section>
  );
};
