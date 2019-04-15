import React, { Component } from 'react';
import { render } from 'react-dom';
import ContactFormHOC from './ContactFormHOC';
import Form from './Form';
import Formik from 'formik';

class App extends Component {
 
  render() {
    return (
      <Form>
        
        <ContactFormHOC/>
        
      </Form>
    )
  }
}


export default App;