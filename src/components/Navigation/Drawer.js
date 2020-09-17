import React from 'react';
import styled from 'styled-components';
import Text from '..//Text';
import NewLink from '../NewLink';

const StyledComponent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: ${props => props.showing ? '350' : '0'}px;
  opacity: ${props => props.showing ? '1' : '0'};
  height: 100%;
  background-color : white;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.3s;
  border-radius:1px;
  box-shadow:1px 2px 3px 1px }
  
}
  .close-button-wrapper{
    padding: 10px;
    display: flex;
    .first{
      flex-grow: 1;
    }
  }

  .Menu-wrapper{
    padding: 10px;

    .span{
      padding: 20px;

      :hover{
        color: gray;
      }
    }
  }
`;

const CancelButton = styled.div`
  color: black;
  display: flex; 
  align-items: center;

  :hover{
    color: gray;
  }
`;

class Drawer extends React.Component{
  render() {
    return (
    <StyledComponent showing={this.props.showing}>
      <div className="close-button-wrapper">
        <div className="first" />
        <CancelButton>
          <i class="fas fa-times fa-2x" onClick={this.props.onClose}></i>
        </CancelButton>
      </div>
      <div className="Menu-wrapper">  
        <NewLink to="regi"><Text >SignOut</Text></NewLink>
        <NewLink to="regi"><Text >Register</Text></NewLink>
        <NewLink to="creinvo"><Text >Invoice</Text></NewLink>
        <NewLink to="bin"><Text >Bin</Text></NewLink>
        <NewLink to="bin"><Text >About us</Text></NewLink>
        <NewLink to="bin"><Text >Contact us</Text></NewLink>
      </div>
    </StyledComponent>
    );
  }
}

export default Drawer;