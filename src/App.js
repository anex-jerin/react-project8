import React from 'react';
import { useState } from 'react';
import './App.css';
import {FaEdit, FaTrash} from 'react-icons/fa'

const App = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {id:new Date().getTime().toString(),title:name}
    if(name){setList([...list, newItem]);}
    setName('') 
  };
  const deleteItem = (id)=>{
   const newList = list.filter(item=> item.id!==id)
   setList(newList)
  }
  const clearAll = () => {
    setList([])
  }
  return (
    <div className='section'>
      <h1>Grocery List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder='e.g. Bread'
        />
        <button className='submit-btn' type='submit'>
          Add
        </button>
      </form>
      <div>
        {list.map((item) => {
          return (
            <div key={item.id} className='list'>
              <h3>{item.title}</h3>
              <div className='btn'>
                <button className='edit'><FaEdit/></button> <button className='del' onClick={()=>{deleteItem(item.id)}}><FaTrash/></button>
              </div>
            </div>
          );
        })}
      </div>
      {list.length>0 &&<div onClick={clearAll} className='clear'>Clear items</div>}
    </div>
  );
};

export default App;
