import React from 'react';
import { Card, Row } from 'reactstrap';
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as key from '../../helpers/keys';
import { getSeries } from '../../helpers/getSeries';
import './details.css';
import { DetailCard } from '../../components/DetailsCard/DetailCard';
import { getComics } from '../../helpers/getComics';
import { Loader } from '../../components/Loader/Loader';

export const Details = ({charObj}:any) => {
  const urlImg = charObj.thumbnail;
  console.log("Char OBJ:", charObj)
  const [series, setSeries] = useState([]);
  const [comics, setComics] = useState([]);
  // const [ data, setData ] = useState({
  //   series: [],
  //   comics: [],
  //   loading: true
  // });

  useEffect(() => {
    getSeries(charObj.id)
      .then((e) => {
        console.log(e)
        setSeries(e);
        // setData({
        //   ...data,
        //   series: e
        // })
      })
        .catch((err) => console.log(err))

    getComics(charObj.id)
      .then((e) => {
        setComics(e);
        // setData({
        //   ...data,
        //   comics: e
        // })
      })
        .catch((err) => console.log(err)) 
  },[])

  return (
    <React.Fragment>
      {series.length !== 0 && comics.length !== 0 ?
        <div className='page-content'>
          <Row>
            <img src={`${urlImg.path}.${urlImg.extension}`} alt='' className='char-img'/>
          </Row>
          <Row>
            <h1 className='display-2'>{charObj.name}</h1>
            <hr className='bar'/>
          </Row>
          <Row>
            <h5>
              {charObj.description === "" ? "No description available" : charObj.description}
            </h5>
          </Row>
          <Row>
            <h3>Series</h3>
            {series.map((item: any, i: any) => {
              const {path, extension} = item.thumbnail
              return(
                <DetailCard
                  key={i}
                  urlImg={`${path}.${extension}`}
                  title={item.title}
                />
              )
            })}
          </Row>
          <Row>
            <h3>Comics</h3>
            {comics.map((item: any, i: any) => {
                const {path, extension} = item.thumbnail
                return(
                  <DetailCard
                    key={i}
                    urlImg={`${path}.${extension}`}
                    title={item.title}
                  />
                )
              })}
          </Row>
        </div>
        : 
          <Loader/> 
      }
      
    </React.Fragment>
  )
}

Details.propTypes = {
  charObj: PropTypes.object.isRequired
}