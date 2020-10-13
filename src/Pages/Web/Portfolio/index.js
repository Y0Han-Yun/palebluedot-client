import React from 'react';
import styled from 'styled-components';
import BackGround from '../../../Component/BackGround';
import Navigation from '../../../Component/Navigation/Bar';

const StyledComponent = styled.div``;

class Portfolio extends React.Component {

  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation />
          Portfolio Page
        </BackGround>
      </StyledComponent>
    );
  }

}

export default Portfolio;
