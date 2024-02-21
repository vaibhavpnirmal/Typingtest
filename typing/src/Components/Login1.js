import React from "react";
import "./Login1.css";
import { FaUser } from "react-icons/fa";
import { MdKeyboard } from "react-icons/md";
import { FaLock } from "react-icons/fa6";


export default function Login1() {

  // const showKeyboard=()=>{

  //   return<>
  //   <div className="keyboard">
  //     <div className="keyboardcontainer">
  //       <div className="container">
  //         <div className="row">
  //           {['~.`', '!.1','@.2','#.3','$.4','%.5','^.6','&.7','*.8','(.9',').0','_.-', '+.=',  
  //             '<i className="fa-solid fa-delete-left"></i>']}

  //         </div>

  //       </div>

  //     </div>

  //   </div>

  //   </>

  // }
  return (
    <div>
      <div className="bluediv"></div>
      <div className="main-container">
        <div className="text-header">
       <div className="content-div">
          <h2>System Name:</h2>
          <div>
            <h1>C001</h1>
          </div>
          <p>
            Kindly contact the invigilator if there are any discrepancies in the
            Name and Photograph <br></br> displayed on the screen or if the photograph is
            not yours
          </p>
          </div>

          <div className="sidecontent-div">
            <h2>Condidate Name</h2>
            <h1>Name</h1>
            <p>subject:Mock exam</p>
         {/* <div>  <img src="./profile-photo.jpg"></img></div> */}
          </div>
        </div>
        <div className="container-down">
          <div className="login-div">
          <div className="logintext">
            <p>Login</p>
          </div>
          <div className="userinput"><FaUser/><input></input><button ><MdKeyboard/></button></div><br></br>
          <div className="password"><FaLock/><input></input><button><MdKeyboard/></button></div><br></br>       
           <button id="btn">Sign In</button>
          </div>

        </div>
      </div>
    </div>
  );
}
