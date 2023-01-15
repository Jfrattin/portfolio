import React from 'react';
import imghome from '../Images/imghome.PNG';
import styles from '../styles/home.css';




export default function Homepag() {
  return (
    
    <div className='home'>
        <div className='texthome'>
          <h1 className='tittle' >Hola</h1> 
          <h3 className='description'> Mi nombre es joaquin soy desarrollador web y estoy buscando mi primer experiencia laboral, 
          y esta es mi pagina de presentacion</h3> 
        </div>
        
        <div>
          <img  className="imghome" 
            src={imghome} alt='Img not found' >
          </img>
        </div>
    </div>
    
  )
}
 