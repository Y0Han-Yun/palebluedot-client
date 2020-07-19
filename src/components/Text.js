import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: ${props => {
    if (props.styledProps.sm) return '0.8';
    else if (props.styledProps.lg) return '1.5';
    return '1';
  }}rem;

  color: #${props => {
    if (props.styledProps.white) return 'FFFFFF';
    else return '333333';
  }};

  font-weight: 300;
  line-height: 1.8rem;
  letter-spacing: 0.05rem;
  word-spacing: 0.1rem;
`;

class Text extends React.Component {

  render () {
    const styledProps = {
      white: this.props.white,
      sm: this.props.sm,
      lg: this.props.lg
    };
    return <StyledComponent styledProps={styledProps}>{this.props.children}</StyledComponent>;
  }

}

export default Text;
