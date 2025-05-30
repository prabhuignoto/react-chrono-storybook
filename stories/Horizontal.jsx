import React from "react";
import { Chrono } from "react-chrono";
import "./styles.css";

export const Basic = (args) => {
  return (
    <section className="wrapper">
      <div style={{ width: "70%", height: "750px" }}>
        <Chrono {...args} fontSizes={{title: "1rem"}}/>
      </div>
    </section>
  );
};
