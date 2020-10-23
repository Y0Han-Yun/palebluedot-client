import React from 'react';
import styled from 'styled-components';
import Button from 'src/Component/Example/Button';


const StyledComponent = styled.div``;

class Memo extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = { 
  //     yohan : [
  //       {
  //         Name: 'john',
  //         Age: '32',
  //         Sex: 'Male',
  //         Heoght: '174'  
  //       }
  //     ]
  //   }
  // }ß
  render () {
    return (
      <StyledComponent>
        <Button />
      </StyledComponent>
    );
  }
}

export default Memo;