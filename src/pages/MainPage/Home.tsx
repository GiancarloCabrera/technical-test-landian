import React from 'react'
import { useEffect, useState } from "react"
import { Navbar } from '../../components/Navbar/Navbar'
import { getCharacters } from '../../helpers/getCharacter'
import './home.css'

export const Home = () => {
  // getCharacters().then(s => console.log(s));
  const [characters, setCharacters] = useState({
    data: [],
    loading: true
  });
  
  useEffect(() => {
    getCharacters().then((char) => {
      console.log('CHAR: ',char)
      setCharacters({
        data: char,
        loading: false
      });
    })
  },[])
  
  return (
    <React.Fragment>
      <Navbar/>
      <div className='content-page'>
        <h1 className='display-2'>Characters</h1>
        <hr className='bar'/>
      </div>     
    </React.Fragment >
  )
}
