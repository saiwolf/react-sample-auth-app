import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button, Form, Col } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { FullTitle } from '../_helpers';
import { accountService, alertService } from '../_services';

function Register({ history }) {

    const initialValues = {
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required('Title is required'),
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
        acceptTerms: Yup.bool()
            .oneOf([true], 'Accept Terms & Conditions is required')
    });

    function onSubmit(fields, { setStatus, setSubmitting }) {
        setStatus();
        accountService.register(fields)
            .then(() => {
                alertService.success('Registration successful, please check your email for verifiction instructions');
                history.push('login');
            })
            .catch(error => {
                setSubmitting(false);
                alertService.error(error);
            });
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ handleSubmit, handleChange, handleBlur, values, isValid, errors, touched, isSubmitting }) => (
                <>
                    <Helmet>
                        <title>{FullTitle('Sign up now!')}</title>
                    </Helmet>
                    <h1 className="text-center">Sign Up!</h1>
                    <Form noValidate onSubmit={handleSubmit}>                                                
                        <Form.Row>
                            <Form.Group as={Col} sm={2}>
                                <Form.Label>Salutation:</Form.Label>
                                <Field name="title" as="select" autoComplete="honorific-prefix" className={'form-control' + (errors.title && touched.title ? 'is-invalid' : '')}>
                                    <option value=""></option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mrs">Mrs</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Ms">Ms</option>
                                </Field>
                                <ErrorMessage name="title" component="div" className="invalid-feedback" />
                            </Form.Group>
                            <Form.Group as={Col} sm={5}>
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    autoComplete="given-name"
                                    isInvalid={!touched.firstName && errors.firstName}
                                />
                                <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} sm={5}>
                                <Form.Label>Last Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                    autoComplete="family-name"
                                    isInvalid={!touched.lastName && errors.lastName}
                                />
                                <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                autoComplete="email"
                                isInvalid={!touched.email && errors.email}
                            />
                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Password:</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                    isInvalid={!touched.password && errors.password}
                                />
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Confirm Password:</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    autoComplete="new-password"
                                    isInvalid={!touched.password && errors.password}
                                />
                                <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <div className="form-group form-check">
                            <Field type="checkbox" name="acceptTerms" id="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                            <label htmlFor="acceptTerms" className="form-check-label">
                                Accept Terms and Conditions
                        </label>
                            <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Register
                        </button>
                            <Link to="login" className="btn btn-link">Cancel</Link>
                        </div>
                    </Form>
                </>
            )}
        </Formik>
    );
}

export { Register };