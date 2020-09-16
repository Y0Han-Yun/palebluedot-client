import React from 'react';
import styled from 'styled-components';


const StyledComponent = styled.button`
  cursor:pointer;
  margin: 0; 
  padding: 0;
  border: 0;
  background-color: #3a7bd5; 
  outline: none;
  padding: 10px;
  display: block;
  .BurgerWarpper{
    width:40px;
    height:25px;
  }
  .Burgerline{
    background-color: #ffffff;
    margin: 6px 0px 6px 0px;
    width 40px;
    height: 5px; 
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.5);
  }
  @media (max-width: 500px) {
    
    background-color: powderblue; 
  }
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