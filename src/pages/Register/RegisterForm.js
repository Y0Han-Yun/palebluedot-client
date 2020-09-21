import React from 'react';
import BackGround from '../../Layout/LogInOutLayout/BackGround';
import LogInOutBox from '../../Layout/LogInOutLayout/LogInOutBox';
import LeftSection from '../../Layout/LogInOutLayout/LeftSection';
import RightSection from '../../Layout/LogInOutLayout/RightSection';
import LogoSection from '../../Layout/LogInOutLayout/LogoSection';
import Register from '../../Layout/LogInOutLayout/Register';


class RegisterForm extends React.Component {

  render () {
    return (<>
      <BackGround>
        <LogInOutBox>
          <LeftSection>         
            <LogoSection/>
          </LeftSection>
          <RightSection>
            <Register/>
          </RightSection>
        </LogInOutBox>
      </BackGround>
    </>);
  }
}

export default RegisterForm;



 