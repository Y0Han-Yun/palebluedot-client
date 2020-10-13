import React from 'react';
import Layer from './Layer';
import OpenButton from './OpenButton';

const StyleComponent = styled.div``;

class DrawerNav extends React.Component {

  constructor (props){
    super(props)
    this.state = {
      ShowLayOut : false
    }
  }

  render () {
    return (
      <StyleComponent> 
        <Layer ShowLayOut={this.props.ShowLayOut} onClick={() => {
          this.setState({
            ShowLayOut: false
          });
        }} />
        <OpenButton ShowLayOut={this.props.ShowLayOut} onClick={() => {
          this.setState({
            ShowLayOut: true
          });
        }} />
        
      </StyleComponent>
    );
  }
}

export default DrawerNav;