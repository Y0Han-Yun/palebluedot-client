import { withRouter } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Text from '..//Text';
import NewLink from '../NewLink';


const Warpper = styled.div`
  width:400px;
  height:700px;
  
  background-color: #EFEFEF;;
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
          <Menu><NewLink to="regi"><Text>SignOut</Text></NewLink></Menu>
          <Menu><NewLink to="regi"><Text>Register</Text></NewLink></Menu>
          <Menu><NewLink to="creinvo"><Text>Invoice</Text></NewLink></Menu>
          <Menu><NewLink to="bin"><Text>Bin</Text></NewLink></Menu>
        </Warpper>
    </>);
  }
}

export default withRouter(BurgerMenu);