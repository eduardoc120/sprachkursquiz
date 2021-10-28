import React from 'react';

import '../assets/styles/layout.css';

const Layout = props => (
  <div className="global-container">
    {props.children}
  </div>
);

export default Layout;
