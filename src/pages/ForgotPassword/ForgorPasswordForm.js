import React from 'react';
import LogInOutBoxLayout from '../../Layout/LogInOutLayout/LogInOutBoxLayout';
import LeftSection from '../../Layout/LogInOutLayout/LeftSection';
import RightSection from '../../Layout/LogInOutLayout/RightSection';
import LogoSection from '../../Layout/LogInOutLayout/LogoSection';
import ForgotPass from '../../Layout/LogInOutLayout/ForgotPass';


class RegisterForm extends React.Component {

  render () {
    return (<>       
    <LogInOutBoxLayout>
      <LeftSection>         
        <LogoSection/>
      </LeftSection>
      <RightSection>
        <ForgotPass/>
      </RightSection>
    </LogInOutBoxLayout>
    </>);
  }
}

export default RegisterForm;



 