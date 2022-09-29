import React from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';
import './characterCard.css';
import PropTypes from "prop-types";

export const CharacterCard = ({urlImg, name, fav}: any) => {
  return (
    <React.Fragment>
      <Card className='char-card'>
        <Row>
          {/* RESOLVER LOS BORDES DE LA IMAGEN */}
          <img alt='' src={urlImg} className='char-image'/>
        </Row>
        <Row xs='2' className='text-content'>
          {/* <CardBody className='card-body'> */}
            <Col xs='10'>
              <CardTitle tag='h4'>{name}</CardTitle>
            </Col>
            <Col xs='2' className='col-icon'>
              <i className="bi bi-heart-fill"></i>             
            </Col>           
          {/* </CardBody> */}
        </Row>
      </Card>
    </React.Fragment>
  )
}

CharacterCard.propTypes = {
  urlImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}