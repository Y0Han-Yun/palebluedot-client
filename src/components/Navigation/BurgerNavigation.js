import React from 'react';
import BurgerIcon from './BurgerIcon';
import BurgerMenu from './BurgerMenu';
import styled from 'styled-components';

const BurgerWarpper = styled.div`
  background-color: #EFEFEF;
  width:400px;
  height:790px;
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