import { withRouter } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import BurgerNav from 'src/Component/Navigation/Burger/BurgerNav';
import Text from 'src/Component/Text';
import LineEffect from 'src/Component/LineEffect';
import FontEffect from 'src/Component/FontEffect';
import { v4 } from 'uuid';

const StyledComponent = styled.nav`
  position: absolute;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  
  .NameSection{
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-grow: 1;

    .PaddingLeft {
      padding-left: 50px;
    }
  }

  .contact-section{
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .MenuSetion{
    width: 40%;
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

const menuList = [
  { id: v4(), displayName: 'Portfolio', path: '/portfolio', icon: 'fas fa-code' },
  { id: v4(), displayName: 'Skills', path: '/skills', icon: 'fas fa-laptop-code' },
  { id: v4(), displayName: 'About', path: '/about', icon: 'fas fa-users' },
  { id: v4(), displayName: 'Home', path: '/', icon: 'fas fa-home' }
];

class Navigation extends React.Component {
  render () {
    return (
      <StyledComponent>
        <div className='NameSection'>
          <div className='PaddingLeft'><LineEffect><Text white>YoHan Yun</Text></LineEffect></div>
        </div>
        <div className='MenuSetion'>
          {menuList.map(menu => 
          <div key={menu.id} className='MarginLeft' onClick={() => this.props.history.push(menu.path)}>
            <FontEffect><Text white>{menu.displayName}</Text></FontEffect>
          </div>
          )}
        </div>
        <div className='BurgerWrapper'>
          <BurgerNav menuList={menuList} />
        </div>
      </StyledComponent>
    );
  }
}

export default withRouter(Navigation);