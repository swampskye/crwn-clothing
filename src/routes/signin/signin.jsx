import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import SignUpForm from "../../signup/signup";
import Button from "../../components/button/button";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        console.log(user)
    }
    return (
        <div>
            <h1>SignIn Page</h1>
            <Button onClick={logGoogleUser} buttonType='google'>SignIn With Google</Button>
            <SignUpForm />
        </div>
    )
}



export default SignIn;