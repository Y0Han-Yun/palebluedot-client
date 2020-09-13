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
  background: linear-gradient(to bottom, #3a7bd5, #3a6073);
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.3s;
  border-radius:1px;
  box-shadow:1px 2px 3px 1px }
  
}
  .close-button-wrapper{
    padding: 5px;
    display: flex;
    .first{
      flex-grow: 1;
    }
  }

  .Menu-wrapper{
    padding: 5px;
  }
`;

class Drawer extends React.Component{
  render() {
    return (
    <StyledComponent showing={this.props.showing}>
      <div className="close-button-wrapper">
        <div className="first" />
        <div>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      </div>
      <div className="Menu-wrapper">
        <NewLink to="regi"><Text white>SignOut</Text></NewLink>
        <NewLink to="regi"><Text white>Register</Text></NewLink>
        <NewLink to="creinvo"><Text white>Invoice</Text></NewLink>
        <NewLink to="bin"><Text white>Bin</Text></NewLink>
        <NewLink to="bin"><Text white>About us</Text></NewLink>
        <NewLink to="bin"><Text white>Contact us</Text></NewLink>
      </div>
    </StyledComponent>
    );
  }
}

export default Drawer;