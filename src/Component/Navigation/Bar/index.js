import React from 'react';
import styled from 'styled-components';
import BurgerNav from '../Burger/BurgerNav';

const StyledComponent = styled.nav`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  
  .NameSection{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-grow: 1;

    .PaddingLeft {
      padding-left: 50px;
    }
  }
  .MenuSetion{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }
  .MarginLeft {
    margin-right: 2rem;
  }
  
  .BurgerWrapper{
    display: none;
  }

  @media (max-width: 550px) {
    
    .MenuSetion{
      display: none;
    }
    .BurgerWrapper{
      display :inline;
      padding-right: 50px;
    }
  }
`;


class Navigation extends React.Component {
  render () {
    return (
      <StyledComponent>
        <div className='NameSection'>
          <div className='PaddingLeft'>YoHan Yun</div>
        </div>
        <div className='MenuSetion'>
          <div className='MarginLeft'>Contact</div>
          <div className='MarginLeft'>Portfolio</div>
          <div className='MarginLeft'>Skills</div>
          <div className='MarginLeft'>About</div>
          <div className='MarginLeft'>Home</div>
        </div>
        <div className='BurgerWrapper'>
          <BurgerNav />
        </div>
      </StyledComponent>
    );
  }
}

export default Navigation;