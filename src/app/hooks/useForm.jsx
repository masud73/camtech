import { useState } from "react";

export default function useForm(formType) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const [firstNameHelperText, setFirstNameHelperText] = useState('');
    const [lastNameHelperText, setLastNameHelperText] = useState('');
    const [phoneHelperText, setPhoneHelperText] = useState('');
    const [emailHelperText, setEmailHelperText] = useState('');
    const [passwordHelperText, setPasswordHelperText] = useState('');

    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        switch (name) {
            case 'fname':
                setFirstName(value);
                break;
            case 'lname':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default:
                setPassword(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        !firstName ? setFirstNameHelperText('Missing first name') : setFirstNameHelperText('');
        !lastName ? setLastNameHelperText('Missing last name') : setLastNameHelperText('');
        !phone ? setPhoneHelperText('Missing phone number') : setPhoneHelperText('');
        !email ? setEmailHelperText('Missing email address') : setEmailHelperText('');
        !password ? setPasswordHelperText('Missing password') : setPasswordHelperText('');

        if (formType === 'applicant-login' && email && password) {
            if (email === 'masud' & password === 'pass') {
                setMessage({type: 'success', color: 'info', text: 'Login successful'});
            } else {
                setMessage({type: 'error', color: '', text: 'Invalid credentials'});
            }

        } else if (formType === 'applicant-signup' &&
            email
            && password
            && firstName
            && lastName
            && phone) {
            setMessage({type: 'success', color: 'info', text: 'Fake sign up was successful'});
        }
    }

    return (
        {
            firstName,
            lastName,
            email,
            phone,
            password,
            handleChange,
            handleSubmit,
            firstNameHelperText,
            lastNameHelperText,
            phoneHelperText,
            emailHelperText,
            passwordHelperText,
            message
        }
    );
}