import React from 'react'
import imghome from '../Images/acercademi.PNG';

export default function Acercademipag() {
  return (
    
    <div className='home'>
            <div className='texthome'>
            <h1 className='tittle' >Les cuento un poco de mi...</h1> 
           <h3 className='description'> 
            soy un estudiante de avanzado de bioingenieria de la Universidad nacional de entre rios, y actualmente estoy 
            tambien estudiando desarrollo web. Durante la cursada de la carrera aprendimos a trabajar en equipo, a ser autodidactas, a tener un ojo critico en los problemas 
            y en las soluciones propuestas. Tambien la carrera tiene una base muy fuerte en programacion orientada a resolver problemas de la salud.
            Yo me considero una persona activa, ademas me gusta estar al tanto de las nuevas tecnologias para poder contar con mas herramientas para resolver los problemas del mundo laboral o personal.
            Disfruto de trabajar en equipo, tengo facilidad en comunicar mis ideas y saber escuchar criticas.
            Tengo muchas ganas de tener mi primera experiencia laboral en el campo del desarrollo web para asi poder aplicar todo 
            lo que estudie estos años. 


            </h3>
  
            </div>
        <div>
       
          <img  className="imghome" 
            src={imghome} alt='Img not found' >
          </img>
        
        </div>
    </div>     
   
  )
}
