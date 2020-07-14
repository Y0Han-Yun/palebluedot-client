import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledComponent = styled.button``;

class Button extends React.Component {

  render () {
    return <StyledComponent>{this.props.children}</StyledComponent>;
  }

}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Button;
