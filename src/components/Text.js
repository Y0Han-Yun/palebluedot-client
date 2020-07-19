import React from 'react';
import styled from 'styled-components';

const fontSize = props => {
  if (props.styledProps.sm) return '0.8';
  else if (props.styledProps.lg) return '1.5';
  return '1';
};

const color = props => {
  if (props.styledProps.white) return 'FFFFFF';
  else return '333333';
};

const styleString = props => `
  font-family: 'Open Sans', sans-serif;
  font-size: ${fontSize(props)}rem;
  color: #${color(props)};
  font-weight: 300;
  line-height: 1.8rem;
  letter-spacing: 0.05rem;
  word-spacing: 0.1rem;
`;

const StyledComponent = styled.span`
  ${props => styleString(props)}
`;

class Text extends React.Component {

  render () {
    const styledProps = {
      white: this.props.white,
      sm: this.props.sm,
      lg: this.props.lg
    };
    return (
      <StyledComponent styledProps={styledProps}>
        {this.props.children}
      </StyledComponent>
    );
  }

}

export { Text as default, styleString };
