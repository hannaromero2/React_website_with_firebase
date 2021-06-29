import React from 'react';
import {Link} from 'react-router-dom'


export const Navbar = () =>(
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
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


      </ul>
    </div>
  </div>
</nav>
 

)

/*(function () {
  var Message;
  Message = function (arg) {
      this.text = arg.text, this.message_side = arg.message_side;
      this.draw = function (_this) {
          return function () {
              var $message;
              $message = $($('.message_template').clone().html());
              $message.addClass(_this.message_side).find('.text').html(_this.text);
              $('.messages').append($message);
              return setTimeout(function () {
                  return $message.addClass('appeared');
              }, 0);
          };
      }(this);
      return this;
  };
  $(function () {
      var getMessageText, message_side, sendMessage;
      message_side = 'right';
      getMessageText = function () {
          var $message_input;
          $message_input = $('.message_input');
          return $message_input.val();
      };
      sendMessage = function (text) {
          var $messages, message;
          if (text.trim() === '') {
              return;
          }
          $('.message_input').val('');
          $messages = $('.messages');
          message_side = message_side === 'left' ? 'right' : 'left';
          message = new Message({
              text: text,
              message_side: message_side
          });
          message.draw();
          return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
      };
      $('.send_message').click(function (e) {
          return sendMessage(getMessageText());
      });
      $('.message_input').keyup(function (e) {
          if (e.which === 13) {
              return sendMessage(getMessageText());
          }
      });
      sendMessage('Hello Philip! :)');
      setTimeout(function () {
          return sendMessage('Hi Sandy! How are you?');
      }, 1000);
      return setTimeout(function () {
          return sendMessage('I\'m fine, thank you!');
      }, 2000);
  });
}.call(this));*/