import React from "react";
import Nav from "./sections/Nav";
import Footer from "./sections/Footer";
import { Outlet } from "react-router-dom";

const RoutePage = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default RoutePage;
