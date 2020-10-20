import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;

class Button extends React.Component {
  render () {
    return (
      <StyledComponent>
        <p>{this.props.Age}</p>
        <p>{this.props.Age}</p>
        <p>{this.props.Sex}</p>
      </StyledComponent>
    );
  }
}

export default Button;