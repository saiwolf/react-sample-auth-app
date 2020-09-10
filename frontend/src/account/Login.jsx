import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Formik, Field, ErrorMessage } from 'formik';
import { Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';

import { accountService, alertService } from '../_services';
import { FullTitle } from '../_helpers';

function Login({ history, location }) {
    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    function onSubmit({ email, password }, { setSubmitting }) {
        alertService.clear();
        accountService.login(email, password)
            .then(() => {
                const { from } = location.state || { from: { pathname: "/" } };
                history.push(from);
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ handleSubmit, handleChange, errors, touched, isSubmitting }) => (
                <>
                    <Helmet>
                        <title>{FullTitle('Login')}</title>
                    </Helmet>
                    <h1>Login</h1>
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Email:</Form.Label>
                            <Field name="email" type="email" autoComplete="username" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />                     
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password:</Form.Label>
                            <Field name="password" type="password" autoComplete="current-password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </Form.Group>
                        <Form.Row>
                            <Form.Group className="col">
                                <Button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    Login
                                </Button>
                                <Link to="register" className="btn btn-link">Register</Link>
                            </Form.Group>
                            <Form.Group className="col text-right">
                                <Link to="forgot-password" className="btn btn-link pr-0">Forgot Password?</Link>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </>
            )}
        </Formik>
    )
}

export { Login };