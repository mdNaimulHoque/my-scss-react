import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js/Header';
import Home from './components/Home/Home';
import Shipment from './components/Home/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </div>
  );
}

export default App;
