import React from 'react';
import { Card, CardBody, CardTitle, Row } from 'reactstrap';
import PropTypes from "prop-types";
import './detailCard.css';

export const DetailCard = ({title, urlImg}: any) => {
  return (
    <React.Fragment>
        <Card className='card-detail'>
            <CardBody>
                <Row>
                    <img alt='' src={urlImg} className='img-detail'/>
                </Row>
                <Row>
                    <CardTitle>
                        <h4>{title}</h4>
                    </CardTitle>
                </Row>
            </CardBody>
        </Card>
    </React.Fragment>
  )
}

DetailCard.propTypes = {
    title: PropTypes.string.isRequired,
    urlImg: PropTypes.string.isRequired
}