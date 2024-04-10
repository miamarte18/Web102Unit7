import React from 'react'
import { useState, useEffect } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'
import { supabase } from '../Client'

const Card = (props) =>  {

  const [count, setCount] = useState(0)

  const updateCount = async (event) => {
    event.preventDefault();
  
    await supabase
      .from('Posts')
      .update({ betCount: count + 1})
      .eq('id', props.id)
  
    setCount((count) => count + 1);
  }
  useEffect(() =>  {
  const getCount= async (event) => {
    event.preventDefault();
  
    const { data } = await supabase
      .from('Posts')
      .update({ betCount: count + 1})
      .eq('id', props.id)
    setCount(data[0].betCount)
  }
  getCount();
}, [props]);

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="title">{props.title}</h2>
          <h3 className="author">{"by " + props.author}</h3>
          <p className="description">{props.description}</p>
          <button className="betButton" onClick={updateCount} >👍 Bet Count: {count}</button>
      </div>
  );
};

export default Card;