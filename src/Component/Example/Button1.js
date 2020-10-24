import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
    width: 300px;
    height: 200px;
    background-color: yellow;

    .Button(
      background-color: blue;
      width: 100px;
      height: 100px;
    )

    .Drop(
      position: fixed;
      top: 0;
      right: 0;
      width: ${state => state.Menu ? '100' : '0'}px;
      height: ${state => state.Menu ? '100' : '0'}px;
      opacity: ${state => state.Menu ? '1' : '0'};
      height: 100%;
      background-color : white;
      overflow-y: scroll;
      overflow-x: hidden;
      transition: all 0.3s;
      border-radius:1px;
      box-shadow:1px 2px 3px 1px;
    )
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

    const element = (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
      </div>
    );
    return (
      <StyledComponent>
        <button className='Button' Menu={this.state.Menu} onClick={this.OpenMenu}>
          asasdg
        </button>
        {this.state.Menu === true
          ? ( 
          <div>
            <div >{element}</div>
            <button Menu={this.state.Menu} onClick={this.onClose}> Close this </button>
          </div>  
          ) : null}
      </StyledComponent>
    );
  }
}

export default Button1;