import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <h1>This a Header section</h1>
      {children}
    </div>
  );
};

export default DefaultLayout;
