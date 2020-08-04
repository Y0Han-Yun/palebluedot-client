import React from 'react';
import styled from 'styled-components';
import BurgerIcon from './BurgerIcon';
import BurgerMenu from './BurgerMenu';


const StyledComponent = styled.div`
  width:400px;
  height:790px;
  background-color: black;
  opacity: .8; 
  z-index: -1;
`;

class PageLayer extends React.Component {
  render () {
    return (<>
      <StyledComponent>
        <BurgerIcon/>
        <BurgerMenu/>
      </StyledComponent>
    </>);
  }
}

export default PageLayer;