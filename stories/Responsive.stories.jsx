import React from "react";
import dataPlain from "./data-plain";
import { Responsive } from "./Responsive";

export default {
  title: "Example/Responsive",
  component: Responsive,
  parameters: {
    docs: {
      description: {
        component: 'Examples demonstrating the responsive behavior of react-chrono. Resize your browser window to see how the timeline adapts to different screen sizes.'
      }
    }
  }
};

const Template = (args) => <Responsive {...args} />;

export const ResponsiveTimeline = Template.bind({});
ResponsiveTimeline.args = {
  items: dataPlain,
  mode: "VERTICAL_ALTERNATING",
  enableBreakPoint: true,
  responsiveBreakPoint: 768,
};
ResponsiveTimeline.parameters = {
  docs: {
    description: {
      story: 'Responsive timeline that switches from VERTICAL_ALTERNATING mode to VERTICAL mode when the screen width is less than 768px. Resize your browser window to see the effect.'
    }
  }
};

export const CustomBreakpoint = Template.bind({});
CustomBreakpoint.args = {
  items: dataPlain,
  mode: "VERTICAL_ALTERNATING",
  enableBreakPoint: true,
  responsiveBreakPoint: 992,
};
CustomBreakpoint.parameters = {
  docs: {
    description: {
      story: 'Responsive timeline with a custom breakpoint of 992px. The timeline will switch to VERTICAL mode when the screen width is less than 992px.'
    }
  }
};

export const DisableResponsive = Template.bind({});
DisableResponsive.args = {
  items: dataPlain,
  mode: "VERTICAL_ALTERNATING",
  enableBreakPoint: false,
};
DisableResponsive.parameters = {
  docs: {
    description: {
      story: 'Timeline with responsive behavior disabled. The timeline will remain in VERTICAL_ALTERNATING mode regardless of screen size.'
    }
  }
};

export const ScrollableVertical = Template.bind({});
ScrollableVertical.args = {
  items: dataPlain,
  mode: "VERTICAL",
  scrollable: { scrollbar: true },
};
ScrollableVertical.parameters = {
  docs: {
    description: {
      story: 'Vertical timeline with scrollable content and visible scrollbar. Particularly useful on mobile devices with limited screen space.'
    }
  }
};
