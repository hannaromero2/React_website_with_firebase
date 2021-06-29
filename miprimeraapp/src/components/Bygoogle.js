import React, {Component} from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../firebaseConfig'
import {Redirect} from 'react-router-dom'
import { Link } from 'react-router-dom'


const firebaseApp = firebase.initializeApp(firebaseConfig)

class Bygoogle extends Component{

    render(){
        const{
            user,
            signOut,
            signInWithGoogle,
            signInWithFacebook,
            
        } = this.props

        return(
            <div>
                {
                    user
                    ? <Redirect to='/inicio'/>
                    : <Redirect to='/'/>
                } 

                {
                    user
                    ?(<nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                      <Link className="navbar-brand"  to="/inicio">Colitas felices</Link>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/"></Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/adopciones">Adopciones</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/eventos">Eventos</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/nosotros">Contactanos</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to="/chat">Chat</Link>
                          </li>
                          <li className="nav-item">
                            <Link onClick={signOut} className="nav-link" to="/">Cerrar Sesión ({firebase.auth().currentUser.email})</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>)
                    :(<div className="container-fluid mt-5">
                     <div className="d-flex justify-content-center mt-4"> 
                      <Link class="btn btn-lg px-3 btn-outline-info" onClick ={signInWithGoogle} role="button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" height="30" alt="Google"></img> Iniciar con Google</Link>
                    </div>
                    <div className="d-flex justify-content-center mt-4"> 
                    <Link className="btn btn-lg px-3 btn-outline-info" onClick ={signInWithFacebook} role="button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" height="30" alt="Facebook"></img>  &nbsp; Iniciar con Facebook</Link>                    </div>
                  </div>)
                  
            }
            
        </div>
        );
    
    }
   
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
    facebookProvider: new firebase.auth.FacebookAuthProvider(),
}


export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
    
})(Bygoogle);

