import React from 'react';
import Container from './Container';
const Layout: React.FunctionComponent = ({ children }) => {
  return (
    // bg-lt-secondary-100 dark:bg-dk-secondary-800
    <div className="bg-base-200">
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
