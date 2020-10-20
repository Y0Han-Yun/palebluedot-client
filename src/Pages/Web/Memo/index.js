import React from 'react';
import styled from 'styled-components';
import Button from 'src/Component/Example/Button';


const StyledComponent = styled.div``;

class Memo extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      yohan : [
        {
          Name: 'john',
          Age: '32',
          Sex: 'Male',
          Heoght: '174'  
        }
      ]
    }
  }
  render () {
    return (
      <StyledComponent>
        <Button Yohan={this.state.yohan}/>
        <Button Yohan={this.state.yohan}/>
      </StyledComponent>
    );
  }
}

export default Memo;