import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.input`
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: #333333;
  font-weight: 300;
  line-height: 1.8rem;
  letter-spacing: 0.05rem;
  word-spacing: 0.1rem;

  box-sizing: border-box;

  ${props => {
    if (props.type === 'checkbox') {
      return '';
    }
    return 'width: 100%;';
  }}

  padding: 0.5rem 1rem;
`;

class Input extends React.Component {

  render () {
    return <StyledComponent type={this.props.type} placeholder={this.props.placeholder}/>;
  }

}

export default Input;
