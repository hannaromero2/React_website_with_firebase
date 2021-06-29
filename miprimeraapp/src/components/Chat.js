import React from 'react'
import firebase from 'firebase/app'
import './css/chat.css'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/analytics'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useRef, useState } from 'react';
import {Redirect} from 'react-router-dom'



const auth = firebase.auth()

const firestore = firebase.firestore()
const analytics = firebase.analytics()
var correo = ''
var usuarioChatId = ''
addUser()





export const Chat = () => {
  const [user] = useAuthState(auth)
  const [room, setRoom] = useState('messages')
  const { photoURL, displayName } = auth.currentUser
  const [name, roomChat] = useState('Chat General')
  const [roomImage, setRoomImage] = useState('https://image.freepik.com/foto-gratis/grupo-amigos-ninos-armar-sesion-juntos_1150-3906.jpg')
  
  // getDatos(uid)

  

  return (
    <>
     
        
      
      <div className="row justify-content-center h-100">

        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css" />
        <div className="col-md-4 col-xl-3 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
          <div className="card-header">
            <div className="input-group">
              <input type="text" placeholder="Buscar..." name className="form-control search" />
              <div className="input-group-prepend">
                <span className="input-group-text search_btn"><i className="fas fa-search" /></span>
              </div>
            </div>
          </div>
          <div className="card-body contacts_body">

            <ui className="contacts">

              <ChatSoporte room={room} setRoom={setRoom} name={name} roomImage={roomImage} roomChat={roomChat} setRoomImage={setRoomImage} />
              <ChatGrupal2 room={room} setRoom={setRoom} name={name} roomImage={roomImage} roomChat={roomChat} setRoomImage={setRoomImage} />
              <GetUsers room={room} setRoom={setRoom} name={name} roomImage={roomImage} roomChat={roomChat} setRoomImage={setRoomImage} />

            </ui>
          </div>


          <div className="card-footer" />
        </div></div>
        <div className="col-md-8 col-xl-6 chat">
          <div className="card">
            <div className="card-header msg_head">
              <div className="d-flex bd-highlight">
                <div className="img_cont">
                  <img src={roomImage} className="rounded-circle user_img" />
                  {console.log(photoURL)}
                  <span className="online_icon" />
                </div>
                <div className="user_info">
                  <span>{name}</span>
                  <p></p>
                </div>
                <div className="video_cam">

                </div>
              </div>
              <div>
               

              </div>
            </div>



            {user ? <Chatroom room={room} setRoom={setRoom} /> : <SignIn />}



          </div>

        </div>

      </div>


    </>
  );
 
}

function RegistroSoporte(){

  const Registro = async () => {

    const registro = firestore.collection('soporte')
    const hora = firebase.firestore.FieldValue.serverTimestamp()
    await registro.add({
        uid:1,
        photoURL: "https://www.megadescuentosonline.com/images/customer-service2.png?crc=302089682",
        displayName: 'Soporte',
        email: 'Soporte@hotmail.com',
        login: hora,
        lasttime: hora
    })
}

firestore.collection('soporte').where('email', '==', 'Soporte@hotmail.com').get().then(async (e) => {
  //console.log(e.empty)
  if (e.empty) {
      Registro();
  }

})
}

function addUser() {

   

  firebase.auth().createUserWithEmailAndPassword('Soporte@hotmail.com', 'soporte').then(res => {
      
      RegistroSoporte()
      if (res.user) res.Auth.setLoggedIn(true)
  })
      .catch(e => {
          console.log(e.message)
      })
}

function Chatroom(props) {
  const [user] = useAuthState(auth)
  const { photoURL, createdAt } = auth.currentUser
  const dummy = useRef()
  const messageRef = firestore.collection(props.room)
  const query = messageRef.orderBy('createdAt').limit(25)
  const [messages] = useCollectionData(query, { idField: 'id' })

  const [formValue, setFormValue] = useState('')

  const sendMessage = async (e) => {

    e.preventDefault()
    const { uid, photoURL, createdAt } = auth.currentUser

    await messageRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('')
    dummy.current.scrollIntoView({ behaviour: 'smooth' })

  }
  return (<>

    <div className="card-body msg_card_body">
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>
    </div>
    <form className="card-footer" onSubmit={sendMessage}>
      <div className="card-footer"></div>
      <div className="input-group">
        <textarea name className="form-control type_msg" placeholder="Escribe tu mensaje..." defaultValue={""} value={formValue} onChange={(e) => setFormValue(e.target.value)} required />
        <div className="input-group-append">
          <span className="input-group-text send_btn" >
            <button type='submit' className="btn btn-primary" background-color="black" >
              <i className="fas fa-location-arrow" />
            </button>
          </span>
        </div>
      </div>

    </form>
  </>)
}
function ChatGrupal2(props) {
  if (props.room != "messages") {

    return (<li id='general'>
      <div id='general' onClick={async (e) => {
        props.setRoom('messages')
        props.roomChat('Chat General')
        props.setRoomImage('https://image.freepik.com/foto-gratis/grupo-amigos-ninos-armar-sesion-juntos_1150-3906.jpg')

      }}>
        <li id='general'>
          <div id='general' className="d-flex bd-highlight">
            <div id='general' className="img_cont">
              <img src="https://image.freepik.com/foto-gratis/grupo-amigos-ninos-armar-sesion-juntos_1150-3906.jpg" id='general' className="rounded-circle user_img" />
              <span id='general' className="online_icon" />
            </div>
            <div id='general' className="user_info">
              <span id='general'>Chat General</span>

            </div>
          </div>
        </li>

      </div>
    </li>)

  }else return <></>

}

function ChatSoporte(props) {
  
 

    return (<li id='soporte'>
      <div id='soporte' onClick={async (e) => {
         VerificarUser(e.target.id, auth.currentUser.uid, e, props.room, props.setRoom)
         firestore.collection('soporte').where('uid', "==", e.target.id).get().then((query) => {
           const datos = query.docs[0]
           console.log(datos)
           props.roomChat('Soporte')
           props.setRoomImage('https://www.megadescuentosonline.com/images/customer-service2.png?crc=302089682')

         })


      }}>
        <li id='soporte'>
          <div id='soporte' className="d-flex bd-highlight">
            <div id='soporte' className="img_cont">
              <img src="https://www.megadescuentosonline.com/images/customer-service2.png?crc=302089682" id='soporte' className="rounded-circle user_img" />
              <span id='soporte' className="online_icon" />
            </div>
            <div id='soporte' className="user_info">
              <span id='soporte'>Soporte</span>

            </div>
          </div>
        </li>

      </div>
    </li>)


}

function VerificarUser(idusuario, idotrousuario, e,mensajes, setRoom) {

  const alta = firestore.collection(e.target.id + auth.currentUser.uid)
  const altaref = firestore.collection(auth.currentUser.uid + e.target.id)
  const { uid, photoURL } = auth.currentUser

  firebase.firestore().collection(idusuario + idotrousuario).get()
    .then((snap) => {
      if (!snap.empty) {
        setRoom(idusuario + idotrousuario)


      } else {


        firebase.firestore().collection('idotrousuario + idusuario').get()
          .then((snap2) => {
            if (!snap2.empty) {


              setRoom(idotrousuario + idusuario)

            }
            else if (snap.empty) {
              setRoom(idusuario + idotrousuario)



            }
          })
      }
    })

}



function Usuarios(props) {
  const { uid, displayName, lasttime, photoURL } = props.usuario
  if (uid === auth.currentUser.uid) {
    return (<></>)
  }
  const ultima = new Date(lasttime.seconds * 1000)
  usuarioChatId = uid

  if (uid !== auth.currentUser.uid) {
    return (<>

      <li id={uid} >
        <div id={uid} onClick={async (e) => {
          VerificarUser(e.target.id, auth.currentUser.uid, e, props.room, props.setRoom)
          firestore.collection('usuarios').where('uid', "==", e.target.id).get().then((query) => {
            const datos = query.docs[0]
            console.log(datos)
            props.roomChat(datos.data().displayName)
            props.setRoomImage(datos.data().photoURL)

          })


        }}>
          <li id={uid} >
            <div id={uid} className="d-flex bd-highlight">
              <div id={uid} className="img_cont">
                <img src={photoURL} id={uid} className="rounded-circle user_img" />

                <span id={uid} className="online_icon" />
              </div>
              <div id={uid} className="user_info">
                <span id={uid}>{displayName}</span>
                <p id={uid}>{ultima.toLocaleString()}</p>
              </div>
            </div>
          </li>
        </div>
      </li>
    </>)
  }
}

function GetUsers(props) {
  const usuariosRef = firestore.collection('usuarios')
  const query = usuariosRef.orderBy('lasttime').limit(25)
  const [usuarios] = useCollectionData(query, { idField: 'id' })
  return (<>
    <div className="card-body contacts_body">
      <ui className="contacts">
        {usuarios && usuarios.map(user => <Usuarios key={user.id} usuario={user} room={props.room} setRoom={props.setRoom} name={props.name} roomImage={props.roomImage} roomChat={props.roomChat} setRoomImage={props.setRoomImage} />)}
      </ui>
    </div>
  </>
  )
}

function SignIn() {

  const signWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (<>
    <button className="sign-in" onClick={signWithGoogle}> Iniciar Sesion </button>
    <p>Bienvenido</p>
  </>)

}

function SignOut() {

  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}> Salir </button>
  )
}



function ChatMessage(props) {
  const { text, uid, photoURL, createdAt } = props.message

  const messageClass = uid == auth.currentUser.uid ? 'sent' : 'received'
  const time = createdAt ? createdAt.toDate().toLocaleTimeString() : null
  const date = createdAt ? createdAt.toDate().toDateString() : null

  if (messageClass == 'received') {
    return (<>
      <div className='d-flex justify-content-start mb-4' >
        <div className="img_cont_msg">
          <img src={photoURL} className="rounded-circle user_img_msg" />
        </div>
        <div className='msg_cotainer_send' >
          {text}
          <span className="msg_time_send">{time}</span>



        </div>

      </div>
    </>)
  }

  if (messageClass == 'sent') {
    return (<>
      <div className='d-flex justify-content-end mb-4' >
        <div className='msg_cotainer' >
          {text}
          <span className="msg_time">{time}</span>
        </div>
        <div className="img_cont_msg">
          <img src={photoURL} className="rounded-circle user_img_msg" />
        </div>
      </div>
    </>)
  }
}
