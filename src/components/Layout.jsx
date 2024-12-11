// import { Outlet } from "react-router-dom"
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

//       <main className="md:w-4/5 py-10 md:h-screen overflow-scroll">
//         <Outlet />
//       </main>