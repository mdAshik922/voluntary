import React, { useEffect, useState } from 'react';
import { getAuth,  signInWithPopup,  onAuthStateChanged, GoogleAuthProvider, signOut } from "firebase/auth";
import initilazion from '../Firebase/Firebase.inti';

initilazion();
const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const auth = getAuth();

const googleProvider = new GoogleAuthProvider();
  const singinWithGoogle = ()=>{
signInWithPopup(auth, googleProvider)
.then(result => {
  // console.log(result.user)
  setUser(result.user)
})
.catch(error =>{
  setError(error.message)
})
  }

  
const logout = () =>{
  signOut(auth)
  .then(()=>{
      setUser({});
  })
}

useEffect(() =>{
  onAuthStateChanged(auth, user=>{
       if(user){
       console.log('inside state change', user);
     setUser(user);
  }
})
}, []);

  return{
      user,
      error,
      singinWithGoogle,
logout
  }
};

export default useFirebase;