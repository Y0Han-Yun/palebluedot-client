import React from 'react';
import styled from 'styled-components';
import Layer from './Layer';
import OpenButton from './OpenButton';
import Drawer from './Drawer';

const Center = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class DrawerSample extends React.Component {

  constructor (props) {
    super(props);
    this.closeLayer = this.closeLayer.bind(this)
    this.state = {
      showingLayer: false
    };
  }

  closeLayer () {
    this.setState({
      showingLayer: false
    });
  }

  render () {
    return (<>

      {/* Layer between page and drawer */}
      <Layer
        onClick={this.closeLayer}
        showing={this.state.showingLayer}
      />

      {/* Test open button for drawer */}
      <Center>
        <OpenButton
          onClick={() => {
            this.setState({
              showingLayer: true
            });
          }}
        />
      </Center>

      {/* Actual drawer from the left side */}
      <Drawer
        onCloseClick={this.closeLayer}
        showing={this.state.showingLayer}
        side="right"
        width={300}
        animation
      />

    </>);
  }

}

export default DrawerSample;
