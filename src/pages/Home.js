import React, {useState, useEffect} from 'react'
// import {Link, Route, Routes } from 'react-router-dom';
import AddTopicComponent from '../components/AddTopicComponent';
import Genre from '../components/Genre';
import Structure from '../components/Structure';
import Display from '../components/Display';
import GPT3 from '../components/GPT3';
import { Button } from 'react-bootstrap';


export default function Home() {
  const [topicList, setTopicList] = useState([]);
  const [items, setItems] = useState([]);
  const [genre, setGenre] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const updateTopicList = newTopicList => {
    setTopicList(newTopicList);
  }

  const updateItems = newItems => {
    setItems(newItems);
  }

  const updateGenre = newGenre => {
    setGenre(newGenre)
  }



  async function fetchData() {
    const text = await GPT3(`Generate me song lyrics with these topics ${topicList}, and this structure ${items}`);
    // console.log('clicked', items, genre, topicList, `Generate me song lyrics in this genre: ${genre}, with these topics: ${topicList}, and this structure ${items}`)
    setGeneratedText(text);

  }

  

  return (
      <div className="Home">
        <Genre genre = {genre} updateGenre = {updateGenre} />
        <Structure items = {items} updateItems = {updateItems} />
        <AddTopicComponent topicList = {topicList} updateTopicList={updateTopicList} />
        {/* <Display displayText = {generatedText} /> */}
        <Button className='generate' type='submit' onClick={fetchData}>Generate Text</Button>
        <p>{generatedText}</p>
      </div>
  )
}


