import { withRouter } from 'react-router-dom';
import React from 'react';
import ForgotPasswordForm from '../ForgotPassword/ForgorPasswordForm';


class ForgotPassword extends React.Component {
  render () {
    return (<>
      <div>
        <ForgotPasswordForm />
      </div>
    </>);
  }
}

export default withRouter(ForgotPassword);