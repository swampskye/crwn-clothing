import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(user)
    }
    return (
        <div>
            <h1>SignIn Page</h1>
            <button onClick={logGoogleUser}>SignIn With Google</button>
        </div>
    )
}



export default SignIn;