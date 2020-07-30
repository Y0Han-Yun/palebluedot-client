import { withRouter } from 'react-router-dom';
import React from 'react';
import CenterLayout from '../../Layout/CenterLayout';
import RegisterForm from './RegisterForm';


class Register extends React.Component{
  render () {
    return (<>
    <div>
      <CenterLayout>
        <RegisterForm></RegisterForm>
      </CenterLayout>
    </div>
    </>);
  }
}

export default withRouter(Register);