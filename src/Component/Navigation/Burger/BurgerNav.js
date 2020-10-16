import React from 'react';
import Layer from './Layer';
import OpenButton from './OpenButton';
import Drawer from './Drawer';

class BurgerNav extends React.Component {

  constructor (props){
    super(props)
    this.state = {
      ShowLayOut : false
    }
  }

  render () {
    return (<>
      <Layer ShowLayOut={this.state.ShowLayOut} onClick={() => {
        this.setState({
          ShowLayOut: false
        });
      }} />

      <OpenButton onClick={() => {
        this.setState({
          ShowLayOut: true
        });
      }} />

      <Drawer menuList={this.props.menuList} ShowLayOut={this.state.ShowLayOut} onClose={() => {
        this.setState ({
          ShowLayOut: false
        });
      }}/> 
    </>);
  }
}

export default BurgerNav;