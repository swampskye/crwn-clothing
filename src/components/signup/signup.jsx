import { useContext, useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";
import './signup.scss'
import FormInput from "../form-input/form-input";
import Button from "../button/button";
import { UserContext } from "../../contexts/userContext";
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}



const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields

    // const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = (event) => {
        console.log(event)
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords do not match')
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            console.log(user)
            // await createUserDocumentFromAuth(user, { displayName })
            // setCurrentUser(user)
            resetFormFields()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Email is already in use')
            } else {
                console.log('user creation encountered an error', error)
            }
        }

    }


    return (
        <div className='sign-up-container'>
            <h2>Do not have an account?</h2>
            <span>Signup with E-mail and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label='Email' type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label='Password' type="password" required onChange={handleChange} name="password" value={password} />
                <FormInput label='Confirm Password' type="password" required name="confirmPassword" onChange={handleChange} value={confirmPassword} />
                <Button type='submit' >submit</Button>
            </form>
        </div >
    )
}


export default SignUpForm