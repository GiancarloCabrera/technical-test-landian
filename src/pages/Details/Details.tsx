import React from 'react';
import { Row } from 'reactstrap';
import { useEffect, useState } from "react";
import { getSeries } from '../../helpers/getSeries';
import { DetailCard } from '../../components/DetailsCard/DetailCard';
import { getComics } from '../../helpers/getComics';
import { Loader } from '../../components/Loader/Loader';
import PropTypes from "prop-types";
import './details.css';


export const Details = ({ charObj, detailStatus, detailStatusChange }: any) => {
  const urlImg = charObj.thumbnail;
  const [series, setSeries] = useState([]);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    getSeries(charObj.id)
      .then((e) => {
        setSeries(e);
      })
      .catch((err) => console.log(err))

    getComics(charObj.id)
      .then((e) => {
        setComics(e);
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <React.Fragment>
      {series.length !== 0 && comics.length !== 0 ?
        <div className='container-detail'>
          <Row>
            <button type="button" className="btn btn-outline-dark btn-home" onClick={() => detailStatusChange(!detailStatus)}>
              <i style={{ width: '30%', marginRight: '5px' }} className="bi bi-arrow-left-square-fill"></i>
              Go Home
            </button>
            <div className='original-img'>
              <img src={`${urlImg.path}.${urlImg.extension}`} alt='' className='char-img'></img>
            </div>
          </Row>
          <Row>
            <h1 className='display-2'>{charObj.name}</h1>
            <hr className='bar' />
          </Row>
          <Row>
            <h5>
              {charObj.description === "" ? "No description available" : charObj.description}
            </h5>
          </Row>
          <Row className='series-details'>
            <h3>Series</h3>
            {series.map((item: any, i: any) => {
              const { path, extension } = item.thumbnail
              return (
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
              const { path, extension } = item.thumbnail
              return (
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
        <Loader />
      }
    </React.Fragment>
  )
}

Details.propTypes = {
  charObj: PropTypes.object.isRequired,
  detailStatus: PropTypes.bool.isRequired,
  detailStatusChange: PropTypes.func.isRequired
}