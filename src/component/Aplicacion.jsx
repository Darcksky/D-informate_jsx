import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import InsigniaPage from '../pages/InsigniaPage';
import InsigniaNueva from '../pages/InsigniaNueva.jsx';
import Layout from './Layout';
import Formulario from './Formulario';
import Entrada from './Entrada';

function Aplicacion() {
  return(
<BrowserRouter>
<Layout>
  <Switch>
    <Route exact path='/insignia' component={InsigniaPage}/>
    <Route exact path='/insignia/new' component={InsigniaNueva}/>
    <Route exact path='/' component={Entrada}/>
    <Route exact path='/insignia/formulario' component={Formulario}/>
  </Switch>
  </Layout>
</BrowserRouter>
  )
}

export default Aplicacion;