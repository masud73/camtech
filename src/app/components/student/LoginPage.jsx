import { Helmet } from "react-helmet";
import { TopBar } from "../../AppHeader";
import useForm from "../../hooks/useForm";
import { Form } from "../Form";
import Page from "../Page";

export default function LoginPage() {
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
                <title>CAMTECH | Student Login</title>
            </Helmet>
            <header>
                <TopBar queryRef="support@camtech.edu.ng" />
            </header>
            <main id="student-login-page">
                <Page
                    studentLoginPage
                    heading='Student Login'
                    subHeading="Existing-students login page"
                />
                <Form
                    message={message}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    submitButtonLabel='Login'
                    formFooterSingleButtonRef="/student/reset_password"
                    formFooterSingleButton="Forgotten password?"
                    fields={[
                        {name: 'email', type: 'text', label: "Matric no. (eg. SD/NDSD/23/000)", defaultValue: email, helperText: emailHelperText},
                        {name: 'password', type: 'password', label: "Password", defaultValue: password, helperText: passwordHelperText}
                    ]}
                />
            </main>
        </>
    );
}