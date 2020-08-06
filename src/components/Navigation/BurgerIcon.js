import React from 'react';
import styled from 'styled-components';

const Warpper = styled.div`
  width:380px;
  height:46px;
  cursor:pointer;
  margin: 32px 0 45px 20px; 
  background-color: #EFEFEF;
  display:flex;
  justify-content: flex-end;
`;

const BurgerWarpper = styled.div`
  width:56px;
  height:35px;
  margin-right: 55px;
`;

const Burgerline = styled.div`
  background-color: #ffffff;
  margin: 6px 0px 6px 0px;
  width: 56px;
  height: 7px; 
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,.5);
  }
`;

class BurgerIcon extends React.Component {

  constructor(props) {
    super(props)
    this.handleChangeColor=this.handleChangeColor.bind(this);
    this.handleBurgerIconClick=this.handleBurgerIconClick.bind(this);
    this.state = {
      id: ''
    };
  };

  handleChangeColor() {};

  handleBurgerIconClick() {
    alert('Burger!');
  };


  render () {
    return (<>
    <Warpper>
      <BurgerWarpper onMouseOver={this.handleChangeColor} onClick={this.handleBurgerIconClick}>
        <Burgerline></Burgerline>
        <Burgerline></Burgerline>
        <Burgerline></Burgerline>
      </BurgerWarpper>
    </Warpper>
    </>);
  }
}

export default BurgerIcon;