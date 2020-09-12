import React from 'react';
import Layer from './Layer';
import OpenButton from './OpenButton';
import Drawer from './Drawer';

class DrawerPage extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      showingLayer: false
    };
  }

  render () {
    return (<>
      <Layer showing={this.state.showingLayer} onClick={() => {
        this.setState({
          showingLayer: false
        });
      }} />
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      
      <OpenButton onClick={() => {
        this.setState({
          showingLayer: true
        });
      }} />
      <Drawer showing={this.state.showingLayer} onClose={() => {
        this.setState({
          showingLayer: false
        });
      }} />
    </>);
  }

}

export default DrawerPage;
