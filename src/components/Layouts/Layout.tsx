import React from 'react';
import { Sidebar } from '../Sidebar/sidebar';

export const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};
