import {React, useState} from 'react'
import { Router, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';




export default function AddTopicComponent() {

  
  const [inputValue, setInputValue] = useState('');
  const [topicList, setTopicList] = useState([]);
  

  const handleChange = e => {
    setInputValue(e.target.value)
  };

  const handleClick = () => {
    if (inputValue !== '') {
      if (topicList.length < 4) {
      // Add the inputValue to the list
      setTopicList([...topicList, inputValue]);
      // Clear the input box
      setInputValue('');
      } else {
        window.alert('You can only have 4 topics.')
      }
    }

  }

  const clearList = () => {
    setTopicList([]);
  }
  

  // const [username, setUsername] = useState('');

  const handleKeypress = e => {
    //it triggers by pressing the enter key
  if (e.key === 'Enter') {
    console.log('clicked')
    handleClick();
  }
};
  

  return (
    <div className="ATC-container">
      <div className="AddTopicComponent">
          <input 
          type="text" 
          onKeyPress={handleKeypress} 
          className='AddTopicComponent--name' 
          placeholder='Topic'value={inputValue}
          onChange={handleChange} />
          <button className='AddTopicComponent--button' onClick={handleClick}>Add</button>
          <button onClick={() => clearList()} className='AddTopicComponent--xbutton'><FontAwesomeIcon icon={faTimes} /></button>
      </div>
      <div className="ATC--list">
        <ul>
          {topicList.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}


