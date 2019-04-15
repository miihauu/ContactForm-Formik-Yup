import React, { Component } from 'react';
import '../css/contactform.css';
import { ErrorMessage } from 'formik';

const ContactForm = ({
  values,
  handleChange,
  handleSubmit,
  errors,
  touched
}) => (
    <div className="contact-form__container">
      <div className="contact-form__header">
        <h1>Contact Form</h1>
        <h4>Contact us for custom case</h4>
      </div>
      <div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="contact-form-input"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {touched.name && errors.name && <div>{errors.name}</div>}
          <input
            type="email"
            placeholder="Your Email Address"
            className="contact-form-input"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {touched.email && errors.email && <div>{errors.email}</div>}
          <input
            type="value"
            placeholder="Your Phone Number"
            className="contact-form-input"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          />
          {touched.phone && errors.phone && <div>{errors.phone}</div>}
          <input
            type="text"
            placeholder="Your Web Site"
            className="contact-form-input"
            name="website"
            value={values.website}
            onChange={handleChange}
          />
          {touched.website && errors.website && <div>{errors.website}</div>}
          <textarea
            type="textarea"
            placeholder="Type your message here (Max 200 characters)"
            className="contact-form-input input-message"
            name="message"
            value={values.message}
            onChange={handleChange}
          />
          { touched.message && errors.message && <div>{errors.message}</div>}
          <button
            type="submit"
            className="contact-form-button">
            Submit
            </button>
        </form>
      </div>
    </div>

  )




export default ContactForm;