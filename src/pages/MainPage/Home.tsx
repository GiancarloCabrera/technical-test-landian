import React from 'react';
import { useEffect, useState } from "react";
import { CharacterCard } from '../../components/CharacterCard/CharacterCard';
import { getCharacters } from '../../helpers/getCharacter';
import { Row, Col } from 'reactstrap';
import { Details } from '../Details/Details';
import { Navbar } from '../../components/Navbar/Navbar';
import { Loader } from '../../components/Loader/Loader';
import './home.css';

export const Home = () => {
  const [detailStatus, setDetailStatus] = useState(false)
  const [charDetail, setCharDetail] = useState({});
  const [characters, setCharacters] = useState({
    data: [],
    loading: true
  });
  
  useEffect(() => {
    getCharacters()
      .then((char) => {
        setCharacters({
          data: char,
          loading: false
        });
      })
        .catch((err) => console.log(err))
  },[])

  const onClickChar = (charObj: any) => {
    setCharDetail(charObj);
    setDetailStatus(!detailStatus);
  }
  
  return (
    <React.Fragment>
      <Navbar/>
        {!characters.loading ?
          <>
            {!detailStatus ?
              <div className='content-page'>
                <Row>
                  <h1 className='display-2'>Characters</h1>
                  <hr className='bar'/>
                </Row>     
                <Row xs='3'>
                    {characters.data.map((char: any, i: any) => {
                      // const url = char.urls[0].url;
                      const urlImg = char.thumbnail;
                      return (
                        <Col key={i}>
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
                </div> 
              :
              <>        
                <Details 
                  charObj={charDetail} 
                  detailStatus={detailStatus}
                  detailStatusChange={setDetailStatus}  
                />
              </>
            }
          </>
          : <Loader/>
        }          
    </React.Fragment >
  )
}
