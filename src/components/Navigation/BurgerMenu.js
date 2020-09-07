import { withRouter } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Text from '..//Text';
import NewLink from '../NewLink';


const Warpper = styled.div`
  padding-top 79px;
  width:400px;
  height:744px;
`;
const Menu = styled.div`
  width:300px;
  height:70px;
  margin: 25px 0px 25px 100px
`;

class BurgerMenu extends React.Component {
  render () {

    let menuVisible = "hide";
    if(this.props.menuVisible) {
      menuVisible ="show";
    }
    return (<>
        <Warpper onClick={this.props.handleMouseDown} className = {menuVisible} >
          <Menu><NewLink to="regi"><Text white>SignOut</Text></NewLink></Menu>
          <Menu><NewLink to="regi"><Text white>Register</Text></NewLink></Menu>
          <Menu><NewLink to="creinvo"><Text white>Invoice</Text></NewLink></Menu>
          <Menu><NewLink to="bin"><Text white>Bin</Text></NewLink></Menu>
          <Menu><NewLink to="bin"><Text white>About us</Text></NewLink></Menu>
          <Menu><NewLink to="bin"><Text white>Contact us</Text></NewLink></Menu>
        </Warpper>
    </>);
  }
}

export default withRouter(BurgerMenu);