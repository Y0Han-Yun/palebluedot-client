import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.button``;

class OpenButton extends React.Component {

  render () {
    return (
      <StyledComponent
        onClick={this.props.onClick}>
        open
      </StyledComponent>
    );
  }

}

export default OpenButton;
