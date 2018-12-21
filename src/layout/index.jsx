import React from 'react';
import './layout.scss';

const Layout = ({ children, page }) => (
    <div className="layout">
        <div className="layout__site-header">
            Novel Planner | {page}
        </div>
        <div className="layout__page-content">
            {children}
        </div>
    </div>
);

export default Layout;
