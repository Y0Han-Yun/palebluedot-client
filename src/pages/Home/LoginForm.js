import React from 'react';
import LogInOutBoxLayout from '../../Layout/LogInOutLayout/Web/LogInOutBoxLayout';
import LeftSection from '../../Layout/LogInOutLayout/Web/LeftSection';
import RightSection from '../../Layout/LogInOutLayout/Web/RightSection';
import LogoSection from '../../Layout/LogInOutLayout/Web/LogoSection';
import Login from '../../Layout/LogInOutLayout/Web/Login';
import MobileLogin from '../../Layout/LogInOutLayout/Mobile/MobileLogin';



class RegisterForm extends React.Component {

  render () {
    return (<>       
    <LogInOutBoxLayout>
      <LeftSection>         
        <LogoSection/>
      </LeftSection>
      <RightSection>
        <Login setUserEmail={this.props.setUserEmail}/>
      </RightSection>
    </LogInOutBoxLayout>
    <MobileLogin />
    </>);
  }
}

export default RegisterForm;



 