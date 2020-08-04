import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import NewLink from '../NewLink';
import { withRouter } from 'react-router-dom';

const Warpper = styled.div`
  width:400px;
  height:700px;
  
`;
const Menu = styled.div`
  
  width:350px;
  height:70px;
  margin: 10px 20px 10px 20px;
`;
class BurgerMenu extends React.Component {
  render () {
    return (<>
    <Warpper>
      <Menu><NewLink to="regi"><Text white>SignOut</Text></NewLink></Menu>
      <Menu><NewLink to="regi"><Text white>Register</Text></NewLink></Menu>
      <Menu> <NewLink to="creinvo"><Text white>Invoice</Text></NewLink></Menu>
    </Warpper>
    </>);
  }
}

export default withRouter(BurgerMenu);