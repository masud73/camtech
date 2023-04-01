import { Helmet } from "react-helmet";
import { TopBar } from "../../AppHeader";
import useForm from "../../hooks/useForm";
import { Form } from "../Form";
import Page from "../Page";

export function LoginPage() {
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
                <title>CAMTECH | Staff Login</title>
            </Helmet>
            <header>
                <TopBar queryRef="support@camtech.edu.ng" />
            </header>
            <main id="staff-login-page">
                <Page
                    studentLoginPage
                    heading='Staff Login'
                    subHeading="Authorized staffs only"
                />
                <Form
                    message={message}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    submitButtonLabel='Login'
                    formFooterSingleButtonRef="/staff/reset_password"
                    formFooterSingleButton="Forgotten password?"
                    fields={[
                        {name: 'email', type: 'email', label: "Email (eg. isah@camtech.edu.ng)", defaultValue: email, helperText: emailHelperText},
                        {name: 'password', type: 'password', label: "Password", defaultValue: password, helperText: passwordHelperText}
                    ]}
                />
            </main>
        </>
    );
}