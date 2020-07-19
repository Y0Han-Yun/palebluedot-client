import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.button`
  variant({
    variants: {
      primary: {
        color: 'white',
        bg: 'primary',
      },
      secondary: {
        color: 'white',
        bg: 'secondary',
      },
    }
  })
`;

class Button extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      children: ''
    };
  }
  render () {
    return <StyledComponent>{this.props.children}</StyledComponent>;
  }

}

export default Button;
