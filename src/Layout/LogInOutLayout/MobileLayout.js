import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: none;
  

  @media (max-width: 500px) {
    display :inline;
    background-color: red;
  }
`;


class MobileLayout extends React.Component {
  
  render () {
    return (<>
      <StyledComponent>
       {this.props.children}
      </StyledComponent>
    </>);
  }
}

export default MobileLayout;