import React from 'react';
import Layer from './Layer';
import OpenButton from './OpenButton';
import Drawer from './Drawer';


class DrawerNav extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      showingLayer: false
    };
  }
  render() {
    return (<>
      <Layer showing={this.state.showingLayer} onClick={() => {
        this.setState({
          showingLayer: false
        });
      }}/>

      <OpenButton onClick={() => {
        this.setState({
          showingLayer: true
        });
      }} />

      <Drawer showing={this.state.showingLayer} onClose={() => {
        this.setState({
          showingLayer: false
        });
      }}/>
    </>);
  }
}

export default DrawerNav;