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
  box-sizing: border-box;
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
