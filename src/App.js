import React, { useEffect, useState } from 'react';
import './App.css';
import AppFooter from './app/AppFooter';
import AppHeader from './app/AppHeader';
import Main from './app/Main';
import { ArrowUpSquareFill } from 'react-bootstrap-icons';


function App() {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  }

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      setShowButton(false);

      if (window.pageYOffset > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setShowButton(false);
      }, 3000);
    };


    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <AppHeader />
      <Main />
      <AppFooter />
      {showButton && <div onClick={handleScrollToTop} style={{display: showButton ? 'block' : 'none', position: 'fixed', bottom: '2rem', right: '2rem', cursor: 'pointer'}}><ArrowUpSquareFill size={45} color='dodgerblue' /></div>}
    </React.Fragment>
  );
}

export default App;
