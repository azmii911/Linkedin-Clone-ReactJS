import  CreateIcon  from '@material-ui/icons/Create'
import  ImageIcon  from '@material-ui/icons/Image'
import  SubscriptionsIcon  from '@material-ui/icons/Subscriptions'
import  EventNoteIcon  from '@material-ui/icons/EventNote'
import  CalendarViewDayIcon  from '@material-ui/icons/CalendarViewDay'
import React, { useState,useEffect } from 'react'
import './Feed.css'
import InputOptions from './InputOptions'
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move';
function Feed() {

    const user = useSelector(selectUser);
    const [input, setinput] = useState('')
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description : user.email,
            message: input,
            PhotoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setinput('');
    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                <CreateIcon />
                <form>
                <input type="text" value={input} onChange={e => setinput(e.target.value)}/>
                <button onClick={sendPost} type="submit">Send</button>                
                </form>
                </div>
            <div className="feed__inputOptions">
                <InputOptions title="Photo" Icon={ImageIcon} color="lightblue"/>
                <InputOptions title="Video" Icon={SubscriptionsIcon} color="orange"/>
                <InputOptions title="Event" Icon={EventNoteIcon} color="lightgray"/>
                <InputOptions title="Write Article" Icon={CalendarViewDayIcon} color="green"/>
            </div>
            </div>
            {/* Posts */}
            <FlipMove>    
            {posts.map(({id, data:{name, description,message,PhotoURL, timestamp} }) => (
            <Post 
            key={id}
            name={name}
            des={description}
            msg={message}
            photoURl ={ PhotoURL}
            time={timestamp}
            />               
            ))}
            </FlipMove>
            
        </div>
    )
}

export default Feed
