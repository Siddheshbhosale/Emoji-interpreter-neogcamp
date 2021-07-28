import React from 'react'
import EmojiDataBase from './EmojiDataBase';
import { useState } from "react";

function App() {
  const [emoji, setemoji] = useState("");
  const emojiWeHave = Object.keys(EmojiDataBase);

  function emojimeaning(e) {
    var userinput = e.target.value;
    var meaning = EmojiDataBase[userinput];

    if (userinput === "") {
      meaning = ""
    }
    else if (meaning === undefined) {
      meaning = "we don't have it in our database"
    }
    setemoji(meaning);
  }

  const EmojiClicked = (value) => {
    setemoji(EmojiDataBase[value]);
  }
  

  return (

    <div className="container" 
      style={{ margin: '0px auto', width: 'auto', textAlign: 'center', fontSize: '30px' }}>
       
       <div style={{display:'none'}}>{document.body.style.backgroundColor= 'black'}</div>

      <header style={{color:'white',border:"1px solid white",padding:"5px",margin:"10px 35%",marginTop:"0px"}} className="App-header" >
        Search your emoji
      </header>

      <input
        style={{ border: "3px solid yellow", padding: "5px", fontSize: '1.2rem', margin: "10px" }}
        onChange={emojimeaning}
        className="emoji-input" type="text" placeholder="Enter Your emoji" />

      <div style={{color:'white', margin: "0.5rem" }}>Meaning: "{emoji}"</div>

      <div style={{color:'white', margin: "25px"}}> Emoji we have<div style={{ fontSize: '1rem' }}>(click to know their meaning)</div></div>

      <div style={{color:'white', width: "50%", margin: "0px auto",border:"2px solid white",borderRadius:"30px",padding:"1rem" }}>
      {emojiWeHave.map((value) => {
          return (
            <span key={value} onClick={() => { EmojiClicked(value) }}
              style={{ fontSize: "2rem", cursor: "pointer", margin: "1rem" }}
            >{value}{" "}</span>
          );
       })}
      </div>


    </div>
  );
}
export default App;
