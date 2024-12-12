import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Resetea el scroll al inicio al cargar la página
    }, []);

  const location = useLocation();
  const isJoinUsPage = location.pathname === '/joinus';

  return (
    <div>
      {!isJoinUsPage && <Header />}
      <main className={isJoinUsPage ? 'joinus-page' : ''}>{children}</main>
      {!isJoinUsPage && <Footer />}
    </div>
  );
};

export default Layout;