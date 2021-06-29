import React from 'react';

const Container: React.FunctionComponent = ({ children }) => {
  return <div className="container max-w-screen-xl mx-auto">{children}</div>;
};

export default Container;
