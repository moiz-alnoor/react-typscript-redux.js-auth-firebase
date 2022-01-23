import {useEffect, useState} from "react"
import GoogleButton from "react-google-button"
import { firebase } from "../../firebase/firebase"
import AuthLogo from "./../auth/auth_logo.png"
import jwt_decode from "jwt-decode"
import { login } from "../../features/user"
import { useDispatch } from "react-redux";

interface userName {
  name: string;
}

// firebase login and then rediredct to the dashboard 

export default function LogIn (){
  
  const dispatch = useDispatch()

  const googleSignIn = () => {
    const googleProider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProider)
      .then((result) => {
        const accessToken :( [] | any) = result.user?.multiFactor
        const decodeAccessToken: userName = jwt_decode(accessToken.user.accessToken)

        // get the name from the token
        const name = decodeAccessToken.name

        // put user data into store
        dispatch(login({ name: name, isLog:true }))

        // redirct to the the dashboard page
        window.location.replace("/dashboard")
                
      }).catch((error) => console.log(error))
     
    }

  return (
    <> 
  
    <div className="flex justify-center mt-24">
      <img src={AuthLogo} width="500" height="500" />
    </div>
    <div className="flex justify-center">
      <GoogleButton onClick={googleSignIn} />
    </div>
     </>

  );


}


