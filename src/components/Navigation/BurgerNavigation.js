import React from 'react';
import BurgerIcon from './BurgerIcon';
import BurgerMenu from './BurgerMenu';
import styled from 'styled-components';

const BurgerWarpper = styled.div`
  background: linear-gradient(to bottom, #3a7bd5, #3a6073);
  position: fixed;
  width: 399px;
  height: 790px;
  transition: left .3s ease-in-out;
  margin-left: -399px;
  box-sizing: border-box;
`;

class BurgerNavigation extends React.Component {
  render () {
    return (<>
      <BurgerWarpper>
        <BurgerIcon />
        <BurgerMenu />
      </BurgerWarpper>
    </>);
  }
}

export default BurgerNavigation;