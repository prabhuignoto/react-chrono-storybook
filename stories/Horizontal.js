import React from "react";
import { Chrono } from "react-chrono";
import "./styles.css";

export const Basic = (args) => {
  return (
    <section className="wrapper">
      <div style={{ width: "650px", height: "750px" }}>
        <Chrono {...args} />
      </div>
    </section>
  );
};
