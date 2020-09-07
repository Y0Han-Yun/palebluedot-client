import React from 'react';
import styled from 'styled-components';

const Warpper = styled.div`
  width:132px;
  height:46px;
  cursor:pointer;
  margin: 10px; 
  display:flex;
  justify-content: flex-end;
`;

const BurgerWarpper = styled.div`
  width:56px;
  height:35px;
  margin-right: 55px;

  hover {
    background-color: #96D9FF;
    cursor: pointer;
    border-color: #003557;
    transform: scale(1.2, 1.2);
  }
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

  render () {
    return (<>
    <Warpper>
      <BurgerWarpper onClick={this.props.handleMouseDown}>
        <Burgerline></Burgerline>
        <Burgerline></Burgerline>
        <Burgerline></Burgerline>
      </BurgerWarpper>
    </Warpper>
    </>);
  }
}

export default BurgerIcon;