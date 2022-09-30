import React from 'react';
import { useEffect, useState } from "react";
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { getCharacters } from '../../helpers/getCharacter';
import { Row, Col } from 'reactstrap';
import { Details } from '../Details/Details';
import './home.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { Loader } from '../../components/Loader/Loader';

export const Home = () => {
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
    }).catch((err) => console.log(err))
  },[])

  const [detailStatus, setDetailStatus] = useState(false)
  const [charDetail, setCharDetail] = useState({});

  const onClickChar = (charObj: any) => {
    console.log('hola')
    setCharDetail(charObj);
    setDetailStatus(!detailStatus);
  }
  
  return (
    <React.Fragment>
      <Navbar/>
        {!characters.loading ?
          <div className='content-page'>
            {!detailStatus ?
              <>
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
                              clickEvent={() => onClickChar(char)} 
                            /> 
                        </Col>   
                      )
                    })}   
                </Row>
              </>
              :
              <>        
                <Details charObj={charDetail} />
              </>
            }
          
          </div> 
          : <Loader/>
        }          
    </React.Fragment >
  )
}
