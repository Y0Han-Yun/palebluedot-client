import React from 'react';
import LogInOutBoxLayout from '../../Layout/LogInOutLayout/LogInOutBoxLayout';
import LeftSection from '../../Layout/LogInOutLayout/LeftSection';
import RightSection from '../../Layout/LogInOutLayout/RightSection';
import LogoSection from '../../Layout/LogInOutLayout/LogoSection';
import Login from '../../Layout/LogInOutLayout/Login';
import MobileLayout from '../../Layout/LogInOutLayout/MobileLayout';



class RegisterForm extends React.Component {

  render () {
    return (<>       
    <LogInOutBoxLayout>
      <LeftSection>         
        <LogoSection/>
      </LeftSection>
      <RightSection>
        <Login/>
      </RightSection>
    </LogInOutBoxLayout>
    <MobileLayout />
    </>);
  }
}

export default RegisterForm;



 