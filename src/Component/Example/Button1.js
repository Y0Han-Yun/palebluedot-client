import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  width: 100%;
  height: 100%;  
  
    .Button(
      background-color: white;
      width: 100px;
      height: 100px;
    )
`;

const DropDown = styled.div`
  display: flex;
  top: 0;
  left: 0;
  background-color : #28333C;
  width: 180px;
  height: 40px;

  DropButton{
    background-color: white;
  }
`;

class Button1 extends React.Component {

  constructor(){
    super();
    this.OpenMenu = this.OpenMenu.bind(this);
    this.onClose = this.onClose.bind(this);
    this.state ={
      Menu: false
    }
  };

  OpenMenu(){
    this.setState({
      Menu : true
    })
  };

  onClose(){
    this.setState({
      Menu: false
    });
  };

  render () {
    return (
      <StyledComponent>
        <button className='Button' Menu={this.state.Menu} onClick={this.OpenMenu}>
          ClickHere!
        </button>
        {this.state.Menu === true
          ? ( 
          <DropDown className='Drop' >
            <div >Home</div>
            <button 
            className='DropButton' 
            Menu={this.state.Menu} 
            onClick={this.onClose}> 
            Close this 
            </button>
          </DropDown>  
          ) : null}
      </StyledComponent>
    );
  }
}

export default Button1;