import React from 'react';
import styled from 'styled-components';
import BackGround from '../../../Component/BackGround';
import Navigation from '../../../Component/Navigation/Bar';

const StyledComponent = styled.div``;

class About extends React.Component {

  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation />
          About Page
        </BackGround>
      </StyledComponent>
    );
  }

}

export default About;
