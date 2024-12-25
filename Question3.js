import React, { useState } from "react";
import Happy from './happy.png';  
import Like from './like.png';    
import Sad from './sad.png';      

function EmojiDisplay() {
  const [inputText, setInputText] = useState('');
  const [image, setImage] = useState(null);
  const handleInputChange = (e) => {
    setInputText(e.target.value);};
  const handleButtonClick = () => {
    if (inputText.toLowerCase() === 'happy') {
      setImage(Happy);  } else if (inputText.toLowerCase() === 'like') {
      setImage(Like);   
    } else if (inputText.toLowerCase() === 'sad') {
      setImage(Sad); } else {
      setImage(null);  
    }};
  return (
    <div className="App">
      <label htmlFor="emojiInput">Enter Emotion:</label>
      <input
        type="text"
        id="emojiInput"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type 'happy', 'like' or 'sad'"
      />
      <button onClick={handleButtonClick}>Display Emoji</button>
      {image && <img src={image} alt="emoji" style={{ width: '100px', height: '100px', marginTop: '20px' }} />}
    </div>
  );}
export default EmojiDisplay;
