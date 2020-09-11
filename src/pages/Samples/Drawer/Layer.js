import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  display: ${props => props.showing ? 'initial' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #000000;
  opacity: 0.6;
  z-index: 10;
`;

class Layer extends React.Component {

  render () {
    return (
      <StyledComponent
        onClick={this.props.onClick}
        showing={this.props.showing}
      />
    );
  }

}

export default Layer;
