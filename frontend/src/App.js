import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './components/Routes';

import './index.css';

function App() 
{
  return (
    <>
      <Header />
        <main className = "py-3">
          <Routes />
        </main>
      <Footer />
    </>
  );
}

export default App;