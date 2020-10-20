import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Global.css'
import "bootstrap/dist/css/bootstrap.css"
import InsigniaNueva from './pages/InsigniaNueva';
import Aplicacion from './component/Aplicacion';

const container = document.getElementById('root');


ReactDOM.render(
 <Aplicacion />, 
 container
)