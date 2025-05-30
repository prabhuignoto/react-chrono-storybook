import React from "react";
import dataImages from "./data-images";
import dataMixed from "./data-mixed";
import data from "./data-plain";
import { Vertical } from "./Vertical";

export default {
  title: "Example/VerticalTimelines",
  component: Vertical,
  parameters: {
    docs: {
      description: {
        component: 'Vertical timeline examples showcasing different configurations and features of react-chrono in vertical modes (both standard vertical and alternating).'
      }
    }
  }
};

const Template = (args) => <Vertical {...args} />;

export const VerticalBasic = Template.bind({});
VerticalBasic.args = {
  items: data,
  mode: "VERTICAL",
};
VerticalBasic.parameters = {
  docs: {
    description: {
      story: 'Basic vertical timeline with cards positioned on the right side of the timeline track.'
    }
  }
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
VerticalThemed.parameters = {
  docs: {
    description: {
      story: 'Vertical timeline with custom primary and secondary colors for a more personalized appearance.'
    }
  }
};

export const VerticalImages = Template.bind({});
VerticalImages.args = {
  items: dataImages,
  mode: "VERTICAL",
};
VerticalImages.parameters = {
  docs: {
    description: {
      story: 'Vertical timeline with images in each card. The images appear above the card content.'
    }
  }
};

export const VerticalMixed = Template.bind({});
VerticalMixed.args = {
  items: dataMixed,
  mode: "VERTICAL",
};
VerticalMixed.parameters = {
  docs: {
    description: {
      story: 'Vertical timeline with a mix of cards - some with images and some without.'
    }
  }
};

export const VerticalLayoutFlipped = Template.bind({});
VerticalLayoutFlipped.args = {
  items: data,
  mode: "VERTICAL",
  flipLayout: true,
};
VerticalLayoutFlipped.parameters = {
  docs: {
    description: {
      story: 'Vertical timeline with the layout flipped, positioning cards on the left side instead of the right.'
    }
  }
};

export const VerticalBorderlessCards = Template.bind({});
VerticalBorderlessCards.args = {
  items: data,
  mode: "VERTICAL",
  borderLessCards: true,
};
VerticalBorderlessCards.parameters = {
  docs: {
    description: {
      story: 'Vertical timeline with borderless cards for a cleaner, more minimalist appearance.'
    }
  }
};

export const VerticalPointShapes = Template.bind({});
VerticalPointShapes.args = {
  items: data,
  mode: "VERTICAL",
  timelinePointShape: "square",
};
VerticalPointShapes.parameters = {
  docs: {
    description: {
      story: 'Vertical timeline with square-shaped timeline points instead of the default circles.'
    }
  }
};
