import { withRouter } from 'react-router-dom';
import React from 'react';
import RegisterForm from './RegisterForm';



class Register extends React.Component{
  render () {
    return (<>
    <div>
      <RegisterForm />
    </div>
    </>);
  }
}

export default withRouter(Register);