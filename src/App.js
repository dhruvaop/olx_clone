import React, { useContext, useEffect,useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/Context';


function App() {

  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
   
   firebase.auth().onAuthStateChanged((user)=>{
     setUser(user)
   })

  }, [])
  

  return (
    <div>
     
      <BrowserRouter>
      <Post>
    
      <Routes>
        <Route exact path='/' element= {<Home/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/create' element = {<Create/>}/>
        <Route path='/view' element = {<View/>}/>
      </Routes>
      </Post>
      </BrowserRouter>
    </div>
  );
}

export default App;
