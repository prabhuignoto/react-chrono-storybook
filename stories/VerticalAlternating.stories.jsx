import React from "react";
import dataImages from "./data-images";
import dataMixed from "./data-mixed";
import data from "./data-plain";
import { Vertical } from "./Vertical";

export default {
  title: "Example/VerticalAlternating",
  component: Vertical,
  parameters: {
    docs: {
      description: {
        component: 'Vertical alternating timeline examples showcasing different configurations and features of react-chrono in vertical alternating mode.'
      }
    }
  }
};

const Template = (args) => <Vertical {...args} />;

export const VerticalAlternatingBasic = Template.bind({});
VerticalAlternatingBasic.args = {
  items: data,
  mode: "VERTICAL_ALTERNATING",
};
VerticalAlternatingBasic.parameters = {
  docs: {
    description: {
      story: 'Vertical timeline with cards alternating between left and right sides of the timeline track.'
    }
  }
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
VerticalAlternatingThemed.parameters = {
  docs: {
    description: {
      story: 'Vertical alternating timeline with custom theme colors for a distinctive look.'
    }
  }
};

export const VerticalAlternatingImages = Template.bind({});
VerticalAlternatingImages.args = {
  items: dataImages,
  mode: "VERTICAL_ALTERNATING",
};
VerticalAlternatingImages.parameters = {
  docs: {
    description: {
      story: 'Vertical alternating timeline with images in each card, creating a visual narrative.'
    }
  }
};

export const VerticalAlternatingMixed = Template.bind({});
VerticalAlternatingMixed.args = {
  mode: "VERTICAL_ALTERNATING",
  items: dataMixed,
};
VerticalAlternatingMixed.parameters = {
  docs: {
    description: {
      story: 'Vertical alternating timeline with a mix of content types (text and images).'
    }
  }
};

export const VerticalAlternatingFlipped = Template.bind({});
VerticalAlternatingFlipped.args = {
  mode: "VERTICAL_ALTERNATING",
  items: data,
  flipLayout: true,
};
VerticalAlternatingFlipped.parameters = {
  docs: {
    description: {
      story: 'Vertical alternating timeline with the alternation pattern flipped (starts with left card instead of right).'
    }
  }
};

export const VerticalAlternatingSlideshow = Template.bind({});
VerticalAlternatingSlideshow.args = {
  items: data,
  mode: "VERTICAL_ALTERNATING",
  slideShow: true,
};
VerticalAlternatingSlideshow.parameters = {
  docs: {
    description: {
      story: 'Vertical alternating timeline with slideshow functionality, automatically cycling through timeline items.'
    }
  }
};
