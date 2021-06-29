import React from 'react'
import Bygoogle from './components/Bygoogle';
import FacebookLogin from 'react-facebook-login';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import {Eventos} from './components/Eventos'
import {Adopciones} from './components/Adopciones'
import {Nosotros} from './components/Nosotros'
import {Inicio} from './components/Inicio'
import {Navbar} from './components/Navbar'
import {Login } from './components/Login';
import {Registro } from './components/Registrar';
import {Recupera} from './components/Recupera';
import {Chat} from './components/Chat';

function App() {
  return (
    
    <Router>  
      <div>
        
      
      <Bygoogle/>
      
      <div>
     
        <Switch>
        
        <Route path="/recupera" component={Recupera}/>
       <Route path = "/inicio" component = {Inicio}/>
        <Route path = "/eventos" component = {Eventos}/>
          <Route path = "/adopciones" component = {Adopciones}/>
          <Route path = "/nosotros" component = {Nosotros}/>
          <Route path="/registro" component={Registro}/>
          <Route path = "/chat" component = {Chat}/>
          <Route path = "/" component = {Login}/>
         
        </Switch>
      
      </div>
      </div>
    </Router>

   
  );
}

export default App;
