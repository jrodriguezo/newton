import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useDispatch } from 'react-redux'
import { app } from "../../firebase.config"
import { setUser } from "../redux/features/user/userSlice"

async function googleAuth() {
    console.log('login...')
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const response = await signInWithPopup(auth, provider)
    
    /* --- TODO: 
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // The signed-in user info.
        const user = result.user
        console.log(result)
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code
        // const errorMessage = error.message
        // The email of the user's account used.
        // const email = error.customData.email
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error)
      })
      */
     return response;
}

export default googleAuth
