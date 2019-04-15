import React, { Component } from 'react';
import '../css/form.css';

const Form = (props) => {

  return (
    <div className="form-background">
      <div className="form__container">
        {props.children}
      </div>
    </div>
  )
}

export default Form;