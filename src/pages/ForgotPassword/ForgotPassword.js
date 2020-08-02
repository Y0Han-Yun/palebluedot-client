import { withRouter } from 'react-router-dom';
import React from 'react';
import CenterLayout from '../../Layout/CenterLayout';
import ForgotPasswordForm from '../ForgotPassword/ForgorPasswordForm';


class ForgotPassword extends React.Component {
  render () {
    return (<>
      <div>
        <CenterLayout>
         <ForgotPasswordForm />
        </CenterLayout>
      </div>
    </>);
  }
}

export default withRouter(ForgotPassword);