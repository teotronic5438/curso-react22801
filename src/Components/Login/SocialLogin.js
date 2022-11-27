import React from 'react';
import { app } from '../../Firebase/FirebaseApp.js'
import { getAuth, signInWithPopup } from 'firebase/auth';
// import { getAuth, signInWithPopup, linkWithPopup } from 'firebase/auth';
// Lo separo para marcar el proceso, es parecido al anterior.
// Logeo redes signInWithPopup lo hace con ventana emergente.
// linkWithPopup: lo vamos a necesitar para enlazar el proceso de login
// Pero no dice en ningun lado cual es el proceso de login (el proveedor) =>
import { GoogleAuthProvider } from 'firebase/auth'; 
// import { GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth'; 

export default function SocialLogin(props) {

    const googleProvider = new GoogleAuthProvider();
    // const twitterProvider = new TwitterAuthProvider();
    
    function doLogin(provider){
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
        .then((credentials) => {
            // Si llegamos aca es porque se logeo
            const firebase_user = credentials.user;
            console.log(firebase_user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    }

    return (
        <>  
            {/* pasamos objeto que creamos para que el boton haga el logeo con este proveedor (google) */}
            <button className='btn btn-outline-primary my-2' onClick={() => doLogin(googleProvider)}>
                {/* <span className='mx-2 loginG'>G</span> */}
                {/* <span><i class="fa-brands fa-google"></i></span> */}
                Inciar con Google
            </button>
        </>
    )
}
