import React from 'react';
import Button from '../Button';
import Text from '../Text';

class BurgerOpenButton extends React.Component{
  render(){
    return (<>
        <Button 
          onClick={this.props.handleMouseDown}>
            <Text>햄버거</Text>
        </Button>
    </>);
  }
}

export default BurgerOpenButton;