import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  color: white;
  display: flex; 
  align-items: center;
`;
class OpenButton extends React.Component{
  render() {
    return (
    <StyledComponent>
      <i className="fas fa-bars fa-2x" onClick={this.props.onClick}></i>
    </StyledComponent>
    );
  }
}

export default OpenButton;