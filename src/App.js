import React from 'react';
import './App.css';
import Header from './components/header'
import Router from './router/router'
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
