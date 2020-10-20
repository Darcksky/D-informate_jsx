import React from 'react';
import '../styles/Entrada.css';
import { Link } from 'react-router-dom';


class Entrada extends React.Component{
  render(){
    return(
      <div className='Entrada_header'>
          <div className='Entrada_h1'>
            <h1>BIENVENIDOS A D-INFORMATE</h1>
          </div>
          
          <div className='Entrada_text' >
          <h5>Texto informativo</h5>
      </div>
      <div>
      <Link to="/insignia/formulario" className="btn btn-primary">
              REGISTRARSE
      </Link>
      </div>
      </div>
      
    )
  }

}
export default Entrada;