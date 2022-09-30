import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import PropTypes from "prop-types";
import './characterCard.css';

export const CharacterCard = ({urlImg, name, clickEvent, fav}: any) => {
  return (
    <React.Fragment>
      <Card 
        className='char-card' 
        onClick={(e) => {
          clickEvent();
        }}
      >
        <img alt='' src={urlImg} className='char-image'/>
        <CardBody>
          <CardTitle>
            {name}
          </CardTitle>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

CharacterCard.propTypes = {
  urlImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  clickEvent: PropTypes.func.isRequired
}