import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState } from 'react-firebase-hooks/auth';
import {useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeMessage({

})
function ChatRoom() {
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField : 'id'});

    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) => {

        e.preventDefault();

        const {uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue, 
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid
        })

        setFormValue('');
    }
}

function ChatMessage(props){

    const {text, uid} = props.message;
    const messageClass = uid === AuthenticatorAssertionResponse.currentUser.uid ? 'sent' : 'received';

    return(
        <div className={`message ${messageClass}`}>
            <p>{text}</p>
        </div>

    )
}

export default messaging;


// model?
return (
    <>
        <div>
            {messages && messages.map(msg => <ChatMessage key = {msg.id} message = {msg} />)}
        </div>  

        <form onSubmit={sendMessage}>

        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
            
        <button type="submit"></button>
            
        </form>   
    </>
)