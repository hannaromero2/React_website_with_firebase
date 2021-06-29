import React from 'react';
import './css/cestilos.css' 

export const Nosotros = () =>(


    <div className="container_contacto" >
    <div className="contact-box" >
      <div className="left" />
      <div className="right">
        <h2>Contáctanos</h2> <br />
        <p> Gracias por querer adoptar una colita feliz</p><br />
        <h6>Porfavor llena tus datos y nosotros nos pondremos en contacto contigo</h6>
        <form action name="formulario" method="get">
          <input type="text" id="nombre" name="nombre" className="field" placeholder="Ingresa tu nombre" required />
          <input type="email" id="correo" name="correo" className="field" placeholder="Ingresa tu correo" required />
          <input type="text" id="telefono" name="telefono" className="field" placeholder="Ingresa tu teléfono" required />
          <input type="text" id="asunto" name="asunto" className="field" placeholder="Ingresa nombre del asunto" required />
          <textarea type="text" id="mensaje" name="mensaje" className="field" placeholder="Escribe tu mensaje" required defaultValue={""} />
          <button type="submit" name="btn" id="btn" className="btn">Enviar</button>
        </form></div>
    </div>
  </div>
 
)