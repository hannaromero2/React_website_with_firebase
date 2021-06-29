import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth'
import firebase from 'firebase/app'
import Auth from 'firebase/app'

export const Recupera = () => {

    const [usuario, setUsuario] = useState()

    const handleSubmit = (e) => {

        e.preventDefault()
        recuperar(usuario)
        

    }

    return(
        <div className="limiter">
        <div className="container-login100" >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form" onSubmit={handleSubmit}>
              <span className="login100-form-title p-b-49">
                Recupera tu contraseña
              </span>
              <br>
              </br>
              <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                <span className="label-input100">Correo</span>
                <input className="input100" type="email" name="username"  placeholder="Ingresa tu correo" onChange={ e => setUsuario(e.target.value)}
                 value={usuario}/>
                <span className="focus-input100" />
              </div>
              
                <br></br>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="btn-grad" type="submit">Recuperar </button>
                </div>
              </div>
              <br></br> <br>
        </br>
              <Link className= "navbar-brand" to = "/">Regrese</Link>         
            </form>
          </div>
       
       
        </div>
     
      </div>
    )

    }

function recuperar(usuario) {
    
    firebase
    .auth()
    .sendPasswordResetEmail(usuario)
    .then(res => {

    })
    .catch(e => {
        console.log(e.message)
    })

  }