import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  visibility: ${props => props.ShowLayOut ? 'visible' : 'hidden'};
  opacity : ${props => props.ShowLayOut ? '0.6' : '0'};
  transition: opacity 0.3s;
  position fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
`;

class Layer extends React.Component {
  render () {
    return <StyledComponent ShowLayOut={this.props.ShowLayOut} onClick={this.props.onClick} />;
  }
}

export default Layer;