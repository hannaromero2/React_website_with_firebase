import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth'
import firebase from 'firebase/app'
import Auth from 'firebase/app'
import './css/main.css' 




export const Login = () => {

    const [usuario, setUsuario] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {

        e.preventDefault()
        login(usuario, password)

    }

    return(
      
        <div className="limiter">
        <div className="container-login100" >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            <form className="login100-form validate-form" onSubmit={handleSubmit}>
              <span className="login100-form-title p-b-49">
                Ingresa
              </span>
              <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                <span className="label-input100">Correo</span>
                <input className="input100" type="email" name="username"  placeholder="Ingresa tu correo" onChange={ e => setUsuario(e.target.value)}
                        value={usuario}/>
                <span className="focus-input100" />


              </div>
              <br></br>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <span className="label-input100">Contraseña</span>
                <input className="input100" type="password" name="pass" placeholder="Ingresa tu contraseña"  onChange={ e => setPassword(e.target.value)}
                        value={password}/>

                <span className="focus-input100" />
              </div>

              <div className="text-right p-t-8 p-b-31">
               <Link className= "navbar-brand" to= "/recupera">¿Olvidaste la contraseña?</Link>
               
               </div>
                <br></br>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="btn-grad" type="submit">
                    Entrar
                  </button>
                </div>
              </div>
              <div className="txt1 text-center p-t-54 p-b-20">
                  <br></br>
                <span>
                  O inicia sesión con...
                </span>
              </div>
              <div className="flex-c-m">
                <button  className="login100-social-item bg3" >
                
                </button>
                
               </div>
               
              <br></br>
              <div className="flex-col-c p-t-155">
                <span className="txt1 p-b-17">
                 ¿ No tienes cuenta ?
                </span>
                <br></br>
                <Link className= "navbar-brand" to = "/registro">Registrese</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )

}

function login(usuario, password) {

    firebase
    .auth()
    .signInWithEmailAndPassword(usuario, password)
    .then(res => {
        if (res.user) Auth.setLoggedIn(true)
    })
    .catch(e => {
        console.log(e.message)
    })
    
}

