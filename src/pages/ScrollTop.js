import React, { useEffect, Fragment } from 'react';
import { withRouter, useLocation } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);