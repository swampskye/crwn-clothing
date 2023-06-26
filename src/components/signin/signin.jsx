import { useContext, useState } from "react"
import { signInWithGooglePopup, createUserDocumentFromAuth, signinAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase";
import './signin.scss'
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import { UserContext } from "../../contexts/userContext";
const defaultFormFields = {
    email: '',
    password: '',
}



const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields

    // const { setCurrentUser } = useContext(UserContext)


    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }


    const signInWithGoogle = async () => {
        signInWithGooglePopup();
        // setCurrentUser(user)
    }

    const handleChange = (event) => {
        console.log(event)
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signinAuthUserWithEmailAndPassword(email, password);
            // console.log(response)
            // setCurrentUser(user)
            resetFormFields()
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break
                case 'auth/user-not-found':
                    alert('email was not registered')
                    break
                default:
                    console.log(error)
            }
        }

    }


    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with E-mail and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">
                    <Button type='submit' >submit</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType='google'>SignIn With Google</Button>
                </div>
            </form>
        </div >
    )
}


export default SignInForm