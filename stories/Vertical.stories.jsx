import React from "react";
import dataImages from "./data-images";
import dataMixed from "./data-mixed";
import data from "./data-plain";
import { Vertical } from "./Vertical";

export default {
  title: "Example/Vertical",
  component: Vertical,
};

const Template = (args) => <Vertical {...args} />;

export const VerticalBasic = Template.bind({});
VerticalBasic.args = {
  items: data,
  mode: "VERTICAL",
};

export const VerticalThemed = Template.bind({});
VerticalThemed.args = {
  items: data,
  mode: "VERTICAL",
  theme: {
    primary: "#253E66",
    secondary: "#EF6555",
  },
};

export const VerticalImages = Template.bind({});
VerticalImages.args = {
  items: dataImages,
  mode: "VERTICAL",
};

export const VerticalMixed = Template.bind({});
VerticalMixed.args = {
  items: dataMixed,
  mode: "VERTICAL",
};

export const VerticalLayoutFlipped = Template.bind({});
VerticalLayoutFlipped.args = {
  items: data,
  mode: "VERTICAL",
  flipLayout: true,
};

export const VerticalAlternatingBasic = Template.bind({});
VerticalAlternatingBasic.args = {
  items: data,
  mode: "VERTICAL_ALTERNATING",
};

export const VerticalAlternatingThemed = Template.bind({});
VerticalAlternatingThemed.args = {
  items: data,
  mode: "VERTICAL_ALTERNATING",
  theme: {
    primary: "#253E66",
    secondary: "#EF6555",
  },
};

export const VerticalAlternatingImages = Template.bind({});
VerticalAlternatingImages.args = {
  items: dataImages,
  mode: "VERTICAL_ALTERNATING",
};

export const VerticalAlternatingMixed = Template.bind({});
VerticalAlternatingMixed.args = {
  mode: "VERTICAL_ALTERNATING",
  items: dataMixed,
};

export const VerticalAlternatingFlipped = Template.bind({});
VerticalAlternatingFlipped.args = {
  mode: "VERTICAL_ALTERNATING",
  items: data,
  flipLayout: true,
};

export const VerticalAlternatingSlideshow = Template.bind({});
VerticalAlternatingSlideshow.args = {
  items: data,
  mode: "VERTICAL_ALTERNATING",
  slideShow: true,
};
