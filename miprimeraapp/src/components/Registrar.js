import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import 'firebase/auth'
import firebase from 'firebase/app'
import Auth from 'firebase/app'


export const Registro = () => {

    const [usuario, setUsuario] = useState()
    const [password, setPassword] = useState()
    const [repassword, setRePassword] = useState()

    const handleSubmit = (e) => {

        e.preventDefault()
        if (password==repassword) {
            console.log(usuario)
        }
        add(usuario, password)
        //console.log(usuario)

    }

    return(
          <div className="limiter">
            <div className="container-login100" >
              <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                <form className="login100-form validate-form" onSubmit={handleSubmit}> 
                  <span className="login100-form-title p-b-49">
                    Registro
                  </span>
                  <div className="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                    <span className="label-input100">Correo</span>
                    <input className="input100" type="email" name="username" placeholder="Ingrese su correo" 
                    onChange={ e => setUsuario(e.target.value)}
                    value={usuario}/>
                    <span className="focus-input100" />
                  </div>
                  <br></br>
                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <span className="label-input100">Contraseña</span>
                    <input className="input100" type="password" name="pass" placeholder="Ingrese su contraseña"
                     onChange={ e => setPassword(e.target.value)}
                    value={password} />
                    <span className="focus-input100"  />
                  </div>
                  <br></br><div className="wrap-input100 validate-input" data-validate="Password is required">
                    <span className="label-input100">Repite tu contraseña</span>
                    <input className="input100" type="password" name="pass" placeholder="Repite su contraseña" 
                     onChange={ e => setRePassword(e.target.value)}
                     value={repassword} />
                    <span className="focus-input100"  /></div>

                  <br>
                  </br>
                  <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                      <div className="login100-form-bgbtn" />
                      <button className="btn-grad" type="submit">
                        Guardar
                      </button>
                    </div>
                  </div>
                </form>
                <br></br>
                <Link className= "navbar-brand" to = "/">Regresar</Link>
              </div>
            </div>
          </div>
    )

}

function add(email, password){

    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
        if (res.user) Auth.setLoggedIn(true)
    })
    .catch(e => { 
        console.log(e.message)
    })

}    

