import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import ContactForm from './ContactForm';

const ContactFormHOC = withFormik({
  mapPropsToValues({ email, name, phone, website, message }) {
    return {
      email: email || '',
      name: name || '',
      phone: phone || null,
      website: website || '',
      message: message || ''
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email()
      .required('Email is required'),
    name: Yup.string()
      .required('Your name is required'),
    phone: Yup.number()
      .typeError('You must specify a number')
      .min(12, 'At least six char')
      .positive('Number should be more than 0'),
    website: Yup.string()
      .url('Appropriate URL is required'),
    message: Yup.string()
      .max(200, 'Max 200 characters')
      .required('Message is required')
  }),
  handleSubmit(values) {
    console.log(values)
  }


})(ContactForm)

export default ContactFormHOC;