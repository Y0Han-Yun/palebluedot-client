import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.button``;

class Button extends React.Component {

  render () {
    return <StyledComponent>{this.props.children}</StyledComponent>;
  }

}

export default Button;
