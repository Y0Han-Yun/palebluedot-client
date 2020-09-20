import React from 'react';
import styled from 'styled-components';
import Text from '..//Text';
import Newlink from '../NewLink';

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
  box-shadow:1px 2px 3px 1px;


  .close-button-wrapper{
    padding: 10px;
    display: flex;
    .first{
      flex-grow: 1;
    }
  }

  .Menu-wrapper{
    padding: 10px;
    heigth: 100%;
  }

  .LinkWrapper{
    padding: 20px 5px 20px 5px;
    display: flex;
    justify-content: space-between;

    .icon-color{
      color: #C6D1E1;
      font-size: 20px;
      padding-top: 5px;
    }

    :hover{
      background-color: #f6f6f6;
    }
  }
`;

const CancelButton = styled.div`
  display: flex; 
  align-items: center;

  .button-color{
    color: #616C7F;
    font-size: 25px;
  }
`;


class Drawer extends React.Component{
 
  render() {
    return (
    <StyledComponent showing={this.props.showing}>
      <div className="close-button-wrapper">
        <div className="first" />
        <CancelButton>
          <i className="fas fa-times fa-2x button-color" onClick={this.props.onClose}></i>
        </CancelButton>
      </div>
      <div className="Menu-wrapper">
        <Newlink to="regi">
          <div className="LinkWrapper">
            <Text drawer>SignOut</Text><i className="fas fa-home icon-color" />
          </div>
        </Newlink>
        <Newlink to="regi">
          <div className="LinkWrapper">  
            <Text drawer>Register</Text><i class="far fa-user icon-color" />
          </div>
        </Newlink>
        <Newlink to="regi">
          <div className="LinkWrapper">
            <Text drawer>Invoice</Text><i class="far fa-sticky-note icon-color" />
          </div>
        </Newlink>
        <Newlink to="regi">
          <div className="LinkWrapper">  
            <Text drawer>Bin</Text><i class="far fa-trash-alt icon-color" />
          </div>
        </Newlink>
        <Newlink to="regi">
          <div className="LinkWrapper">  
            <Text drawer>About us</Text><i class="fas fa-users icon-color" />
          </div>  
        </Newlink>
        <Newlink to="regi">
          <div className="LinkWrapper">
            <Text drawer>Contact us</Text><i class="far fa-envelope icon-color" />
          </div>  
        </Newlink>
      </div>
    </StyledComponent>
    );
  }
}

export default Drawer;