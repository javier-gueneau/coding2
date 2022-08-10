import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Page from './screens/Page';
import Word from './screens/Word';
import Fetch from './components/Fetch';
import React,{useEffect,useState} from 'react';

const App=()=> {

  const[typeId,setTypeId]=useState({
    type:'planets',
    id:'9',
  });

  return (
    <Routes>
      <Route path="/"  element={ <Login  inputs={typeId} setInputs={setTypeId} />} />
      <Route path="/dashboard" element={ <Dashboard/>} />
      <Route path="/page" element={ <Page/>} />
      <Route path="/:word" element={ <Word inputs={typeId} setInputs={setTypeId} />} />

    </Routes>
  );
}

export default App;
