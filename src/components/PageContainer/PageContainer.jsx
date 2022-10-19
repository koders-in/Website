import React, { useState, useEffect } from 'react';
import "./PageContainer.scss";

const PageContainer = ({ children, delay = 100, showScrollBar = false }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isShown ? children : (showScrollBar ? <div className="koders-page-container with-scroll"></div> : null);
};

export default PageContainer;
