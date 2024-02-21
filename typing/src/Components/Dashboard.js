import React, { useState } from "react";
import arrayofstring from "./data";
import { v } from "./data";

const Dashboard = () => {
  const [userInput, setUserInput] = useState("");
  let [correct, setcorrect] = useState(0);
  const [typedkey, settypekey] = useState(0);
  const [incorrect, setincorrect] = useState(0);
  const [back, setback] = useState(0);

  let count = 0;
  let wrong = 0;
  let keydown = 0;

  const handelchange = (e) => {
    let word = e.target.value;
    let userwords = word.trim().split(" ");

    userwords.forEach((word, index) => {
      if (word === arrayofstring[index]) {
        count++;
      } else {
        wrong++;
      }
    });

<<<<<<< HEAD
      }
      const key=(e)=>{
        settypekey(()=>{
            return typedkey+1})
            console.log(e.key)
        if(e.key==="Backspace"){
            setback(()=> back+1)
            settypekey(()=>{

                if(typedkey>0){
                        return (typedkey-1)}
                    
                })
                
                
                   

=======
    setcorrect(count);
    setincorrect(wrong);
  };
  const key = (e) => {
    settypekey(() => {
      return typedkey + 1;
    });
    console.log(e.key);
    if (e.key === "Backspace") {
      setback(() => back + 1);
    }
  };
>>>>>>> a2332ee10042ca2d75c9b6760add71eff9009a65

  return (
<<<<<<< HEAD
    <div className='container'>
        <div className='left'>
              <div className='para'>
<p id='one'> {v}
    
</p>
      </div>
      
      <div><textarea  className='userpara'  onChange={handelchange} onKeyDown={key}  >
        </textarea></div>
        
        <button className='btn'>result</button>
        
        </div>
    


     
        

<div className='right'>
    
    <div className='result'>
=======
    <div>
      <div className="para">
        <p id="one"> {v}</p>
      </div>

      <div>
        <textarea
          className="userpara"
          onChange={handelchange}
          onKeyDown={key}
        ></textarea>
      </div>

      <div className="result">
>>>>>>> a2332ee10042ca2d75c9b6760add71eff9009a65
        <h1>Result </h1>
        <h3>total words:{arrayofstring.length}</h3>
        <h3>keydown:- {typedkey}</h3>
        <h3>correct:- {correct}</h3>
        <h3>wrong :-{incorrect}</h3>
        <h3>Backspace:- {back}</h3>
<<<<<<< HEAD
        
        

      </div>
      
      </div>


=======
>>>>>>> a2332ee10042ca2d75c9b6760add71eff9009a65
      </div>
    </div>
  );
};

export default Dashboard;
