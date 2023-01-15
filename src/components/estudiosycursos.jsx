import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import styles from '../styles/estudiosycursos.css';




import certhml from '../Images/Estudios y Cursos/Htmlycsscertificado.png';
import certjavascript from '../Images/Estudios y Cursos/javascriptcertificado.png';
import certifpython from '../Images/Estudios y Cursos/Pythoncertificado.png';
import certifintro from '../Images/Estudios y Cursos/introduccionalaprogramacioncertificado.png';

export default function Estudiosycursos() {
  


  return (
    <div className='Certifbody'>
      <div className='textCertif' >
        <h2>Durante el ultimo año realice distintos cursos de forma virtual de la plataforma Open-Bootcamp formandome en los lenguajes de programacion de HTML Y CSS, Javascript, Python y React Js.</h2>
        </div>
        <div className='certif'>
      <Carousel variant="dark" >
        <Carousel.Item>
          <img
            className="d-block"
            src={certhml}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 href='www.google.com'>Link</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={certjavascript}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 >Second slide label</h3>
            <p  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            
            src={certifpython}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3  >Third slide label</h3>
            <p  >
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            
            src={certifintro}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3  >Third slide label</h3>
            <p  >
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
      
    </div>
  );






  
  
}
