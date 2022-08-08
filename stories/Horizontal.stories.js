import React from "react";
import dataImages from "./data-images";
import dataMixed from "./data-mixed";
import data from "./data-plain";
import { Basic } from "./Horizontal";

export default {
  title: "Example/Horizontal",
  component: Basic,
};

const Template = (args) => <Basic {...args} />;

export const HorizontalTimeline = Template.bind({});
HorizontalTimeline.args = {
  items: data,
  mode: "HORIZONTAL",
  focusActiveItemOnLoad: false
};

export const HorizontalThemed = Template.bind({});
HorizontalThemed.args = {
  items: data,
  mode: "HORIZONTAL",
  theme: {
    primary: "#253E66",
    secondary: "#EF6555",
  },
};

export const HorizontalImages = Template.bind({});
HorizontalImages.args = {
  items: dataImages,
  mode: "HORIZONTAL",
  focusActiveItemOnLoad: false
};

export const HorizontalMixed = Template.bind({});
HorizontalMixed.args = {
  items: dataMixed,
  mode: "HORIZONTAL",
  focusActiveItemOnLoad: false
};

export const HorizontalCardPosition = Template.bind({});
HorizontalCardPosition.args = {
  items: data,
  mode: "HORIZONTAL",
  cardPositionHorizontal  : "TOP",
  focusActiveItemOnLoad: false
};
