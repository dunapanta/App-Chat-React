<<<<<<< HEAD
import firebase from"firebase";
const firebaseConfig={ apiKey: "AIzaSyC1pw6pGuP4U15awdLaJ8nZfNbsgf0xkl8",
authDomain: "app-chat-react-a0d4a.firebaseapp.com",
databaseURL: "https://app-chat-react-a0d4a.firebaseio.com",
projectId: "app-chat-react-a0d4a",
storageBucket: "app-chat-react-a0d4a.appspot.com",
messagingSenderId: "871600509714",
appId: "1:871600509714:web:b684225d682b5d2924d9cb"
}
if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig);
}
=======
import firebase from 'firebase';

const firebaseConfig={
    apiKey: "AIzaSyC1pw6pGuP4U15awdLaJ8nZfNbsgf0xkl8",
    authDomain: "app-chat-react-a0d4a.firebaseapp.com",
    databaseURL: "https://app-chat-react-a0d4a.firebaseio.com",
    projectId: "app-chat-react-a0d4a",
    storageBucket: "app-chat-react-a0d4a.appspot.com",
    messagingSenderId: "871600509714",
    appId: "1:871600509714:web:b684225d682b5d2924d9cb"
};

// if (!firebase.app.length){
//     firebase.initializeApp(firebaseConfig);    
// }
firebase.initializeApp(firebaseConfig);    
>>>>>>> 3271f37f4f33fa9c3bafe9ae6052d01a8299168e
export default firebase.auth();