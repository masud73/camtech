import { Helmet } from "react-helmet";
import { TopBar } from "../../AppHeader";
import useForm from "../../hooks/useForm";
import { Form } from "../Form";
import Page from "../Page";


export default function ApplicantSignUpPage() {
    const formData = useForm('applicant-signup');
    const {
        firstName,
        lastName,
        phone,
        email,
        password,
        firstNameHelperText,
        lastNameHelperText,
        emailHelperText,
        phoneHelperText,
        passwordHelperText,
        message,
        handleSubmit,
        handleChange
    } = {...formData}

    return (
        <>
            <Helmet>
                <title>Online Application Register Page</title>
            </Helmet>
            <header>
                <TopBar queryRef="support@camtech.edu.ng" />
            </header>
            <main>
                <Page 
                    heading='Applicant Sign Up Page'
                    subHeading='CAMTECH Online Application 2022-2023 Session'
                />
                <Form
                    message={message}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    submitButtonLabel='Create my account'
                    formFooterSingleButtonRef="/applicant/login"
                    formFooterSingleButton="Login"
                    fields={[
                        {name: 'fname', type: 'text', label: "First name", defaultValue: firstName, helperText: firstNameHelperText},
                        {name: 'lname', type: 'text', label: "Last name", defaultValue: lastName, helperText: lastNameHelperText},
                        {name: 'email', type: 'email', label: "Email address", defaultValue: email, helperText: emailHelperText},
                        {name: 'phone', type: 'phone', label: "Phone", defaultValue: phone, helperText: phoneHelperText},
                        {name: 'password', type: 'password', label: "Password", defaultValue: password, helperText: passwordHelperText}
                    ]}
                />
            </main>
        </>
    );
}