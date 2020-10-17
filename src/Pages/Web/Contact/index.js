import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';

const StyledComponent = styled.div``;

class Contact extends React.Component {

  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation />
          Contact Page
        </BackGround>
      </StyledComponent>
    );
  }

}

export default Contact;
