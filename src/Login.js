import React from 'react';
import './Login.css';
import { auth } from './firebase';

function login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState('');   

    const Register = (e) => {
       if(!name) {
           alert('Please enter a full name');
       }
    }
    const LoginToApp = () => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }))
            })
        }).catch(error => alert(error.message));  
    }

    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
        userAuth.user.updateProfile({
            displayName: name,
            photoURL: profilePic
        })
        .then(() => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic
            }))
        })
    }).catch(error => alert(error.message));

  return (
    <div className='login'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg' alt='' />

      <form>
        <input value={name} onChange={e => setName(e.target.value)} placeholder='Full name (required if registering)' type='text' />
        <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile pic URL (optional)' type='text' />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' type='email' />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' type='password' />
        <button type='submit' onClick={LoginToApp}>Sign In</button>
      </form>
      <p>Not a member? 
        <span className='login__register' onClick={Register}>Register Now</span>
      </p>
    </div>
  )
}

export default login;