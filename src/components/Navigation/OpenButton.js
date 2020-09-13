import React from 'react';
import styled from 'styled-components';


const StyledComponent = styled.button`
  cursor:pointer;
  margin: 0; 
  padding: 0;
  border: 0;
  background-color: #3a7bd5; 
  outline: none;

  .BurgerWarpper{
    width:50px;
    height:35px;
  }
  .Burgerline{
    background-color: #ffffff;
    margin: 6px 0px 6px 0px;
    width: 50px;
    height: 5px; 
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.5);
  }
`;


class OpenButton extends React.Component{
  render() {
    return (
      <StyledComponent onClick={this.props.onClick}> 
        <div className="BurgerWarpper">
          <div className="Burgerline"/>
          <div className="Burgerline"/>
          <div className="Burgerline"/>                
        </div>
      </StyledComponent>
    );
  }
}

export default OpenButton;