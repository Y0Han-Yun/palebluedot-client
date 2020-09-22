import React from 'react';
import LogInOutBoxLayout from '../../Layout/LogInOutLayout/Web/LogInOutBoxLayout';
import LeftSection from '../../Layout/LogInOutLayout/Web/LeftSection';
import RightSection from '../../Layout/LogInOutLayout/Web/RightSection';
import LogoSection from '../../Layout/LogInOutLayout/Web/LogoSection';
import Register from '../../Layout/LogInOutLayout/Web/Register';


class RegisterForm extends React.Component {

  render () {
    return (<>       
    <LogInOutBoxLayout>
      <LeftSection>         
        <LogoSection/>
      </LeftSection>
      <RightSection>
        <Register/>
      </RightSection>
    </LogInOutBoxLayout>
    </>);
  }
}

export default RegisterForm;



 