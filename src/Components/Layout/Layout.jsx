import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
