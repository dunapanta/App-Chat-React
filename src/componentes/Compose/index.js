import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import './Compose.css';

export default function Compose(props) {

  const [input, setInput ] = useState("");

  const handleInput = e => {
    setInput(e.target.value)
  } 

  const presionandoEnter = e => {
    console.log(`Pressed keyCode ${e.key}`);
    if(e.key === 'Enter'){
      e.preventDefault();
      setInput(e.target.value)
   }
  }
    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Tu Mensaje..."
          onKeyPress={presionandoEnter} 
          onChange={handleInput}
          value={input}
        />
        
       <button className="toolbar-button" 
       onClick={
         () => { 
           props.handleMeesage(input)
           setInput("")
          }
         }>BOTTON</button>
      </div>
    );
}
