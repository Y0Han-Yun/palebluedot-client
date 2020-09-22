import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  width: 45%;
  height: 100%;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1D242B;
  border-radius: 0 20px 20px 0;

  @media (max-width: 500px) {
    width: 100%;
    border-radius: 0px;
  }
`;

class RightSection extends React.Component {

  render () {
    return (<>
      <StyledComponent>
        {this.props.children}
      </StyledComponent>
    </>);
  }

}

export default RightSection;
