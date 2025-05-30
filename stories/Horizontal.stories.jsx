import React from "react";
import dataImages from "./data-images";
import dataMixed from "./data-mixed";
import data from "./data-plain";
import { Basic } from "./Horizontal";

export default {
  title: "Example/Horizontal",
  component: Basic,
  parameters: {
    docs: {
      description: {
        component: 'Horizontal timeline examples showcasing different configurations and features of react-chrono in horizontal mode.'
      }
    }
  }
};

const Template = (args) => <Basic {...args} />;

export const HorizontalTimeline = Template.bind({});
HorizontalTimeline.args = {
  items: data,
  mode: "HORIZONTAL",
  focusActiveItemOnLoad: false
};
HorizontalTimeline.parameters = {
  docs: {
    description: {
      story: 'Basic horizontal timeline with text content. This is the default layout if no mode is specified.'
    }
  }
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
HorizontalThemed.parameters = {
  docs: {
    description: {
      story: 'Horizontal timeline with custom primary and secondary colors. The primary color affects the timeline track, while the secondary color is used for active elements.'
    }
  }
};

export const HorizontalImages = Template.bind({});
HorizontalImages.args = {
  items: dataImages,
  mode: "HORIZONTAL",
  focusActiveItemOnLoad: false
};
HorizontalImages.parameters = {
  docs: {
    description: {
      story: 'Horizontal timeline with images in each card. Images are displayed above the card content.'
    }
  }
};

export const HorizontalMixed = Template.bind({});
HorizontalMixed.args = {
  items: dataMixed,
  mode: "HORIZONTAL",
  focusActiveItemOnLoad: false
};
HorizontalMixed.parameters = {
  docs: {
    description: {
      story: 'Horizontal timeline with a mix of cards - some with images and some without.'
    }
  }
};

export const HorizontalCardPosition = Template.bind({});
HorizontalCardPosition.args = {
  items: data,
  mode: "HORIZONTAL",
  cardPositionHorizontal: "TOP",
  focusActiveItemOnLoad: false
};
HorizontalCardPosition.parameters = {
  docs: {
    description: {
      story: 'Horizontal timeline with cards positioned above the timeline track instead of below it.'
    }
  }
};

export const HorizontalAllCards = Template.bind({});
HorizontalAllCards.args = {
  items: data,
  mode: "HORIZONTAL",
  showAllCardsHorizontal: true,
  focusActiveItemOnLoad: false
};
HorizontalAllCards.parameters = {
  docs: {
    description: {
      story: 'Horizontal timeline that displays all cards simultaneously instead of only showing the active one.'
    }
  }
};
