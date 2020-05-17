import React from "react";
import Chat from "../../Chat/chat-component";
//import Sidebar from "../../sidebar/sidebar-chat-component";
import ConversationList from 'componentes/ConversationList/index';
import './estilo-chat.css';


function HomeChat(props){
    return (
        <div className="estilo-chat">
            <ConversationList />
            <Chat/>
        </div>    
    )
}




export default HomeChat;