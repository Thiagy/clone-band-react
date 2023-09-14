import React,{useState} from 'react';
import Header from './components/Header';
import Spinner from './components/Spinner';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

export default function App(){

  const[open, setOpen]=useState(false)

  const[closeMenu, setCloseMenu]=useState(false)

  return (
    <>
      <Header />
      <Spinner open={open}/>
      <Menu closeMenu={closeMenu}/>
      <Main open={open} setOpen={setOpen} closeMenu={closeMenu} setCloseMenu={setCloseMenu}/>
      <Footer open={open}/>
    </>
  );
}

