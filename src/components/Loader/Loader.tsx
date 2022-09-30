import React from 'react'
import './loader.css';

export const Loader = () => {
    //integrar la foto DE SPIDEMANNNNNNNNNNNNNNNNNNNNNNNNNNNN
  return (
    <div className='loader-content' id='container'>
        <div className='loader-circle' id='circle'></div>
        <img 
            src='https://cdn.shopify.com/s/files/1/0006/8308/1852/products/images__account_254686426956825107_2020-10-27_20201027_xCUF3ZhA_vh-avenger-7_1024x1024.png?v=1610834542' 
            alt=''
            className='loader-img-bakcground'    
        />
        <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <span>Loading</span>
        </div>
    </div>
  )
}
