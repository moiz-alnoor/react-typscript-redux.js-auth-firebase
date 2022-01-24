import GoogleButton from "react-google-button"
import { firebase } from "../../firebase/firebase"
import AuthLogo from "../../file/auth_logo.png"
import jwt_decode from "jwt-decode"
import { login } from "../../features/user"
import { useDispatch } from "react-redux"

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

        // decode the token to convert the  data in human redable  format
        const decodeAccessToken: userName = jwt_decode(accessToken.user.accessToken)

        // get the name from the decode token
        const name = decodeAccessToken.name

        // put the user data into redux store
        dispatch(login({ name: name, isLog:true }))

        // redirct to the the dashboard page
        window.location.replace("/dashboard")
                
      }).catch((error) => error)
     
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
  )


}


