import React from "react";
import { Basic } from "./Horizontal";
import dataImages from "./data-images";
import dataMixed from "./data-mixed";
import data from "./data-plain";

export default {
  title: "Example/Horizontal",
  component: Basic,
};

const Template = (args) => <Basic {...args} />;

export const HorizontalTimeline = Template.bind({});
HorizontalTimeline.args = {
  items: data,
  mode: "HORIZONTAL",
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
};

export const HorizontalMixed = Template.bind({});
HorizontalMixed.args = {
  items: dataMixed,
  mode: "HORIZONTAL",
};

export const HorizontalCardPosition = Template.bind({});
HorizontalCardPosition.args = {
  items: data,
  mode: "HORIZONTAL",
  cardPositionHorizontal  : "TOP"
};
