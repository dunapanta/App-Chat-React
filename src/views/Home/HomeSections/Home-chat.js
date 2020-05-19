import React from "react";
import Chat from "../../Chat/chat-component";
//import Sidebar from "../../sidebar/sidebar-chat-component";
import ConversationList from 'componentes/ConversationList/index';
import Button from '@material-ui/core/Button';
import './estilo-chat.css';


function HomeChat(props){

    const mensaje = "prueba mensaje";

    const handleUser = () => {
        const mensaje = "prueba mensaje";
        fetch('https://app-chat-react-a0d4a.firebaseio.com/mensajes.json', {
            method: 'POST',
            body: JSON.stringify(mensaje),
            headers: { 'Content-Type': 'aplication/json' }
        }).then(response => {
            console.log("Clic boton");
            return response.json();
        }).catch(error => {
            return console.log("Error en la PROMESA");
        })
    }
    return (
        <div className="estilo-chat">
            <div className='conver'>
                <ConversationList  />
            </div>
            <div className='chat'>
                <Chat  />
            </div>
            <Button onClick={handleUser}>BOTON</Button>
        </div>    
    )
}




export default HomeChat;