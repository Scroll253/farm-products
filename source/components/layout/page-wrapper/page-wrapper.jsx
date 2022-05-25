import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import { Outlet } from 'react-router-dom';

function PageWrapper() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PageWrapper;
