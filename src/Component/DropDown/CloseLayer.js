import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  visibility: ${props => props.Value ? 'visible' : 'hidden'};
  opacity : ${props => props.Value ? '0.6' : '0'};
  transition: opacity 0.3s;
  position fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%
`;

class CloseLayer extends React.Component {
  render () {
    return <StyledComponent Value={this.props.Value} onClick={this.props.onClick} />;
  }
}

export default CloseLayer;