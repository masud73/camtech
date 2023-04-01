import React from 'react';
import './App.css';
import AppFooter from './app/AppFooter';
import AppHeader from './app/AppHeader';
import Main from './app/Main';


function App() {
  return (
    <React.Fragment>
      <AppHeader />
      <Main />
      <AppFooter />
    </React.Fragment>
  );
}

export default App;
