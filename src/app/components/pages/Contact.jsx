import useForm from "../../hooks/useForm";
import { Form } from "../Form";

export default function Contact() {
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
        <div className="mt-5">
            <h1 className="fs-3 text-center text-secondary">Send Us a Message</h1>
            <Form
                noFooter
                message={message}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                submitButtonLabel='Send'
                fields={[
                    {name: 'name', type: 'text', label: 'Names'},
                    {name: 'email', type: 'email', label: 'Email address'},
                    {name: 'phone', type: 'phone', label: 'Phone number (optional)'},
                    {name: 'message', type: 'textarea', label: 'Write your message'}
                ]}
            />
        </div>
    );
}