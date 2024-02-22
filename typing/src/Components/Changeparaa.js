import React from 'react'
import { v} from './data'
import './changepara.css'
const Changeparaa = () => {

 
    const copypast=(e)=>{

    let vai=e.target.value
     
    v=vai
     console.log(v)
        

    }



  return (
    <div>
      <textarea className='copypast' placeholder='copy and past your paragraph' onChange={copypast}>

      </textarea>
    </div>
  )
}

export default Changeparaa
