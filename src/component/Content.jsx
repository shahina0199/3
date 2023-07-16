import { useState } from "react";
 
  

 
 

 

function Content() {
  const [text, setText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleButtonClick = () => {
    setDisplayedText(text);
  };

  const handleTextAreaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextAreaChange}
        placeholder="Enter some text"
      />
      <br />
      <button onClick={handleButtonClick}>Display Text</button>
      <p>{displayedText}</p>
    </div>
  );
}

export default Content;
