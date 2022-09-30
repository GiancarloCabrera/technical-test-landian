import React from 'react'
import { Link } from 'react-router-dom';
import './error.css';

export const Error = () => {
  return (
    // CAMBIARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR A LA IMAGEN DE DEADPOOLLLLLLL
    <div className='page-content'>
      <div className='circle-error'></div>
      <img src='https://i.ibb.co/XDFkXMx/spiderman-colgado.png' alt='' className='img-bakcground'/>
      <h1 className='title'>Error 404</h1>
      <p className='text-content'>Page not found! You have been disappeared by the snap!!!</p>
      <Link to={'/home'}>
        <button className="btn btn-outline-light me-2 home-boton" type="button">Go home</button>
      </Link>     
    </div>
  )
}
