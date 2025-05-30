import React, { useState, useEffect } from "react";
import { Chrono } from "react-chrono";
import "./styles.css";

export const Responsive = (args) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mode, setMode] = useState(args.mode || "VERTICAL_ALTERNATING");
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    // Switch to VERTICAL mode on small screens
    if (windowWidth < 768 && args.enableBreakPoint !== false) {
      setMode("VERTICAL");
    } else {
      setMode(args.mode || "VERTICAL_ALTERNATING");
    }
  }, [windowWidth, args.mode, args.enableBreakPoint]);

  return (
    <section className="wrapper responsive-wrapper">
      <div className="responsive-container">
        <div className="current-width">Current width: {windowWidth}px</div>
        <div className="current-mode">Mode: {mode}</div>
        <Chrono 
          {...args} 
          mode={mode}
          fontSizes={{title: "1rem"}} 
        />
      </div>
    </section>
  );
};
