import React from 'react';
import Dashboard from './Components/Dashboard';
import Login1 from './Components/Login1';
// import TypingTest from './Components/Practice';
import { Route,Routes } from 'react-router-dom';
import Changeparaa from './Components/Changeparaa';
function App() {
  return (
    <div className="App">
   {/* <Dashboard></Dashboard> */}
   {/* <TypingTest></TypingTest> */}
   <Routes>
    <Route path='/' Component={Login1}></Route> 
    <Route path='/dashboard' Component={Dashboard}></Route>
    <Route path='/changepara' Component={Changeparaa}></Route>
    
   </Routes>
   {/* <Login1/> */}
   {/* <Changeparaa></Changeparaa> */}
    </div>
  );
}

export default App;
