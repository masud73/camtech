import { Helmet } from "react-helmet";
import { TopBar } from "../../AppHeader";
import useForm from "../../hooks/useForm";
import { Form } from "../Form";
import Page from "../Page";


export default function ApplicantLoginPage() {
    const formData = useForm('applicant-login');
    const {
        email,
        password,
        emailHelperText,
        passwordHelperText,
        message,
        handleSubmit,
        handleChange
    } = {...formData}

    return (
        <>
            <Helmet>
                <title>CAMTECH - Online Application 2022-2023 Session</title>
            </Helmet>
            <header>
                <TopBar queryRef="support@camtech.edu.ng" />
            </header>
            <main>
                <Page
                    heading='Applicant Login Page'
                    subHeading='CAMTECH Online Application 2022-2023 Session'
                />
                <Form
                    message={message}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    submitButtonLabel='Login'
                    hasFormFooterLinks
                    signUpRef="Sign up"
                    forgotPasswordRef="Forgot password"
                    fields={[
                        {name: 'email', type: 'email', label: "Email address", defaultValue: email, helperText: emailHelperText},
                        {name: 'password', type: 'password', label: "Password", defaultValue: password, helperText: passwordHelperText}
                    ]}
                />
            </main>
        </>
    );
}