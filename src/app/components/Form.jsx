import { TextField, Box, Button, Divider, Link, Alert } from "@mui/material";
import { Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export function Form(props) {
    const navigate = useNavigate();
    
    return (
        <Box onSubmit={props.handleSubmit} component='form' autoComplete="off" className='form-container border rounded p-4 m-auto mb-5'>
            {props.message && <Alert className='mb-4' severity={props.message.type} color={props.message.color}>{props.message.text}</Alert>}
            <Stack>
                {props.fields.map((f) => {
                    return (
                        <TextField
                            className='mb-3'
                            key={f.name}
                            error={f.helperText?true:false}
                            helperText={f.helperText}
                            defaultValue={f.defaultValue}
                            name={f.name}
                            onChange={props.handleChange}
                            size="small"
                            multiline={f.type === 'textarea'?true:false}
                            minRows={5}
                            maxRows={5}
                            fullWidth
                            type={f.type}
                            label={f.label}
                            variant="outlined"
                        />
                    );
                })}
                <Button className='mb-2' type="submit" fullWidth variant="contained" size='medium'>{props.submitButtonLabel}</Button>
                {!props.noFooter &&
                    <>
                    <Divider className='mb-2'>or</Divider>
                    <div className="d-flex justify-content-between">
                        {
                            props.hasFormFooterLinks?
                            <>
                                <Link
                                    component="button"
                                    underline="hover"
                                    onClick={() => { navigate('/applicant/signup') }}
                                >{props.signUpRef}</Link>
                                <Link
                                    component="button"
                                    underline="hover"
                                    onClick={() => { navigate('/applicant/reset_password') }}
                                >{props.forgotPasswordRef}</Link>
                            </>:
                            <Button fullWidth variant="outlined" size='medium' onClick={() => { navigate(props.formFooterSingleButtonRef) }}>{props.formFooterSingleButton}</Button>
                        }
                    </div>
                    </>
                }
            </Stack>
        </Box>
    );
}


// APPLICANT

export function ApplicantSignUpForm(props) {
    const navigate = useNavigate();

    return (
        <Box component='form' autoComplete="off" noValidate className='border rounded p-4 m-auto form-container to mb-5 w-2'>
            <Stack direction='row' gap={3}>
                <TextField size="small" fullWidth type='text' label="First name" variant="outlined" />
                <TextField size="small" fullWidth type='text' label="Last name" variant="outlined" />
                <TextField size="small" fullWidth type='email' label="Email address" variant="outlined" />
                <TextField size="small" fullWidth type='phone' label="Phone number" variant="outlined" />
                <TextField size="small" fullWidth type='password' label="Password" variant="outlined" />
                <Button fullWidth variant="contained" size='medium'>Create my account</Button>
                <Divider>or</Divider>
                <Button fullWidth variant="outlined" size='medium' onClick={() => { navigate('/applicant/login') }}>Login</Button>
            </Stack>
        </Box>
    );
}