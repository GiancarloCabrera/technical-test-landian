import React from 'react';
import { Row, Col } from 'reactstrap';
import './details.css';

export const Details = () => {
  return (
    <React.Fragment>
      <div className='page-content'>
        <Row>
          <img src='https://lumiere-a.akamaihd.net/v1/images/cg_disneyplus_thorcollection_mobile_385_7d225f9c.jpeg?region=0,32,1024,576&width=960' alt='' className='char-img'/>
        </Row>
        <Row>
          <h1 className='display-2'>Thor</h1>
          <hr className='bar'/>
        </Row>
        <Row>
          <h5>
            Thor está buscando la paz interior, pero la irrupción de Gorr, 
            el asesino de dioses, le obliga a volver al combate. 
            Thor recluta a la Reina Valkiria, Korg y su exnovia, Jane Foster, 
            para que lo ayuden a evitar la extinción de los dioses.
          </h5>
        </Row>
        <Row>
          <h3>Series</h3>
        </Row>
        <Row>
          <h3>Comics</h3>
        </Row>
      </div>
    </React.Fragment>
  )
}
