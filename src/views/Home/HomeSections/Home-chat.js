import React from "react";
import Chat from "../../Chat/chat-component";
//import Sidebar from "../../sidebar/sidebar-chat-component";
import ConversationList from 'componentes/ConversationList/index';
import MessageList from 'componentes/MessageList/index';
import Button from '@material-ui/core/Button';
import './estilo-chat.css';
import 'componentes/Messenger/Messenger.css';


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
        <div className="messenger">
            <div className='scrollable sidebar'>
                <ConversationList  />
            </div>
            <div className='scrollable content'>
                <MessageList/>
            </div>
            {/* <Button onClick={handleUser}>BOTON</Button> */}
        </div>    
    )
}




export default HomeChat;