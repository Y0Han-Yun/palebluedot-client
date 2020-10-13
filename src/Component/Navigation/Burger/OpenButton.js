import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  color: white;
  display: flex;
  align-items: center;
`;

class OpenButton extends React.Component {
  render() {
    return (
      <StyledComponent>
        <i class="fas fa-bars" onClick={this.props.onClick}></i>
      </StyledComponent>
    );
  }
}

export default OpenButton;