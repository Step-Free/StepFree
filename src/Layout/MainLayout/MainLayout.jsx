import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Header/>
      <main className="min-h-screen bg-gray-50">
        <Outlet/>
      </main>
      <Footer/>

    </>
  );
}

export default MainLayout;
