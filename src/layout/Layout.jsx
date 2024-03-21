import React from 'react';
import LayoutWrapper from './LayoutWrapper';
import Sidebar from './Sidebar';
import LayoutBody from './LayoutBody';
import LayoutContent from './LayoutContent';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <LayoutContent>
        <NavBar />
        <LayoutBody>
          {children}
        </LayoutBody>
      </LayoutContent>
    </LayoutWrapper>
  );
};

export default Layout;