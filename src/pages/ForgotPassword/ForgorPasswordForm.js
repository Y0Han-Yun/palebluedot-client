import React from 'react';
import LogInOutBoxLayout from '../../Layout/LogInOutLayout/Web/LogInOutBoxLayout';
import LeftSection from '../../Layout/LogInOutLayout/Web/LeftSection';
import RightSection from '../../Layout/LogInOutLayout/Web/RightSection';
import LogoSection from '../../Layout/LogInOutLayout/Web/LogoSection';
import ForgotPass from '../../Layout/LogInOutLayout/Web/ForgotPass';
import MobileForgotPass from '../../Layout/LogInOutLayout/Mobile/MobileForgotPass';

class ForgorPasswordForm extends React.Component {

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
    <MobileForgotPass />
    </>);
  }
}

export default ForgorPasswordForm;



 