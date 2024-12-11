// import { Outlet } from "react-router-dom"
import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  const location = useLocation();  
  const isJoinUsPage = location.pathname === '/joinus';

  return (
    <div>
      {!isJoinUsPage && <Header />}
      <main>{children}</main>
      {!isJoinUsPage && <Footer />}
    </div>
  );
};

export default Layout;

//       <main className="md:w-4/5 py-10 md:h-screen overflow-scroll">
//         <Outlet />
//       </main>