import React from 'react';
import styled from 'styled-components';
import Text from './Text';

const StyledComponent = styled.button`
  cursor: pointer;
  padding: 0.25rem 1.5rem;

  ${props => {
    if (props.styledProps.primary) {
      return 'background-color: #333333;';
    } else if (props.styledProps.secondary) {
      return 'background-color: #FFFFFF;';
    }
    return '';
  }}
  
`;

class Button extends React.Component {

  render () {
    const styledProps = {
      primary: this.props.primary,
      secondary: this.props.secondary
    };
    return <StyledComponent styledProps={styledProps}><Text white={this.props.primary}>{this.props.children}</Text></StyledComponent>;
  }

}

export default Button;
