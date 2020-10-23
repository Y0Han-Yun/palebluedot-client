import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;

  .DropDown(
    display: none;
  )
`;

class Button1 extends React.Component {

  constructor(){
    super();
    this.OpenMenu = this.OpenMenu.bind(this);
    this.state ={
      Menu: false
    }
  };

  OpenMenu(){
    this.setState({
      Menu : true
    });
    return (
      <div>asd</div>
    );

  };
  render () {

    const menu =(
      <div className="DropDown">
        <button>asdasdafs</button>
        <button>asdasdafs</button>
        <button>asdasdafs</button>
        <button>asdasdafs</button>
        <button>asdasdafs</button>
      </div>
    );

    return (
      <StyledComponent Menu={this.state.Menu} onClick={this.OpenMenu}>
        {this.props.children}
      </StyledComponent>
    );
  }
}

export default Button1;