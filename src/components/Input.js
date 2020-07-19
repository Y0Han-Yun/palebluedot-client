import React from 'react';
import styled from 'styled-components';
import { styleString } from './Text';

const width = props => {
  if (props.type === 'checkbox') return '';
  return 'width: 100%;';
};

const StyledComponent = styled.input`
  ${props => styleString(props)}
  ${props => width(props)}
  padding: 0.5rem 1rem;
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
