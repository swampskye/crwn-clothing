// import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import SignUpForm from "../../components/signup/signup";
import SignInForm from "../../components/signin/signin";
// import Button from "../../components/button/button";
import './authentication.scss'
const Authentication = () => {
    // const logGoogleUser = async () => {
    //     const { user } = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth(user)
    //     console.log(user)
    // }
    return (
        <div className="authentication-container">
            {/* <h1>SignIn Page</h1> */}
            <SignInForm />
            <SignUpForm />
        </div>
    )
}



export default Authentication;