import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PageLayout = ({ darkMode, toggleDarkMode, children }) => {
  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
