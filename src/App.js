import React from "react";
import "./App.css";
import Home from './pages/Home'
import Movies from './pages/Movies'
import SingleMovie from './pages/SingleMovie'
import Cart from './pages/Cart'
import Error from './pages/Error'
import {Switch, Route} from 'react-router-dom'


import Navbar from './components/Navbar'
function App() {
  return (
    <>
  <Navbar/>
      <Switch>
        <Route exact path='/' component = {Home}/>
        <Route path='/Cart' component = {Cart}/>
        <Route path='/Movies' component = {Movies}/>
        <Route path='/:title' component = {SingleMovie}/>
        <Route component = {Error}/>
      </Switch>
    </>
  );
}

export default App;
