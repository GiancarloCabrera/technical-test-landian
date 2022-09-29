import React from 'react';
import { useEffect, useState } from "react";
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { getCharacters } from '../../helpers/getCharacter';
import { Row, Col } from 'reactstrap';
import './home.css';

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
      <div className='content-page'>
        <Row>
          <h1 className='display-2'>Characters</h1>
          <hr className='bar'/>
        </Row>     
        <Row xs='3'>
            {characters.data.map((char: any) => {
              // const url = char.urls[0].url;
              const urlImg = char.thumbnail;
              console.log("OBJ: ",char)
              return (
                <Col>
                  <CharacterCard 
                    key={char.id}
                    urlImg={`${urlImg.path}.${urlImg.extension}`}
                    name={char.name}  
                  />    
                </Col>   
              )
            })}   
        </Row>
      </div>     
    </React.Fragment >
  )
}
