import React from 'react';
import { Card, Row } from 'reactstrap';
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as key from '../../helpers/keys';
import { getSeries } from '../../helpers/getSeries';
import './details.css';
import { DetailCard } from '../../components/DetailsCard/DetailCard';

export const Details = ({charObj}:any) => {
  const urlImg = charObj.thumbnail;
  console.log("Char OBJ:", charObj)
  const series = charObj.series.items;
  const comics = charObj.comics.items;
  const [ seriesArray, setSeriesArray ] = useState([])

  useEffect(() => {

  },[])
  return (
    <React.Fragment>
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
            { series.map((item: any, i: any) => {
              getSeries(item.resourceURI).then((e) => {
                // e.preventDefault();
                // const serie = e;
                console.log("AL TALLERE DEL MAESTRP: ",e);
                // setSeriesArray(e);
              }).catch((err) => console.log(err));

              return(
                <DetailCard
                  key={i}
                  urlImg={'https://i.annihil.us/u/prod/marvel/i/mg/4/40/5a98437953d4e.jpg'}
                  title={item.name}
                />
              )})
            }
          
        </Row>
        <Row>
          <h3>Comics</h3>
          { comics.map((item: any, i: any) => {

            return(
              <DetailCard
                key={i}
                urlImg={'https://media.revistagq.com/photos/5e79dbc15bcabb0008f4dba6/master/w_1920%2Cc_limit/14.%2520El%2520increi%25CC%2581ble%2520Hulk-%2520Planeta%2520Hulk.jpg'}
                title={item.name}
              />
            )
          })}
        </Row>
      </div>
    </React.Fragment>
  )
}

Details.propTypes = {
  charObj: PropTypes.object.isRequired
}