import React, { useEffect, useState } from 'react';
import './index.css';
import Modal from './Modal';
import Sidebar from './Sidebar';
import Home from './Home';


const App = () => {

  return (
    <>
      <Home/>
      <Modal/>
      <Sidebar/>
    </>
  );

};

export default App;
