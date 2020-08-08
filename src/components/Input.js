import React from 'react';
import styled from 'styled-components';
import { textStyledTemplate } from './Text';

const width = props => {
  if (props.type === 'checkbox') return '';
  return 'width: 100%;';
};

const StyledComponent = styled.input`
  ${props => textStyledTemplate(props)}
  ${props => width(props)}
  padding: 0.5rem 1rem;
  padding-top: 53px;
  box-sizing: border-box;
  border-width: 0 0 1px;
  background: transparent;
  outline: none;
  color: white; 
`;

class Input extends React.Component {

  render () {
    const styledProps = {};
    return (
      <StyledComponent
        styledProps={styledProps}
        type={this.props.type}
        placeholder={this.props.placeholder}/>
    );
  }

}

export default Input;
