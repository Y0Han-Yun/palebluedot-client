import React from 'react';
import LogInOutBoxLayout from '../../Layout/LogInOutLayout/Web/LogInOutBoxLayout';
import LeftSection from '../../Layout/LogInOutLayout/Web/LeftSection';
import RightSection from '../../Layout/LogInOutLayout/Web/RightSection';
import LogoSection from '../../Layout/LogInOutLayout/Web/LogoSection';
import ForgotPass from '../../Layout/LogInOutLayout/Web/ForgotPass';


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



 