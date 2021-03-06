import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselContainer.scss';
import image1 from '../img/1.png';
import image2 from '../img/2.png';
import image3 from '../img/3.png';

export const CarouselContainer = () => {
  return (

    <Carousel fade={true} pause={false} className="carro">
      <Carousel.Item interval={2000}>
        <div className='img-baner'>
          <img
            className="d-block w-100"
            src={image1}
            alt="Imcetron"
          />
        </div>
        <Carousel.Caption>
          <div className='texts'>
            <h3>Suministros de materiales aislantes</h3>
            <p>Para transformadores y motores eléctricos</p>
            <a href="/Catalogo"><button className='boton-personalizado-4'>VER CATALOGO</button></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className='img-baner'>
          <img
            className="d-block w-100"
            src={image2}
            alt="Imcetron"
          />
        </div>
        <Carousel.Caption>
          <div className='texts'>
            <h3>Servicios eléctricos</h3>
            <p>Amplia experiencia y tecnología sólida</p>

            <a href="/Servicios"><button className='boton-personalizado-4'>NUESTRO SERVICIOS</button></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className='img-baner'>
          <img
            className="d-block w-100"
            src={image3}
            alt="Imcetron"
          />
        </div>
        <Carousel.Caption>
          <div className='texts'>
            <h3>Third slide label scelerisque</h3>
            <p>vel scelerisque nisl consectetur.</p>

            <a href="#"><button className='boton-personalizado-4'>NUESTRA EMPRESA</button></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}


