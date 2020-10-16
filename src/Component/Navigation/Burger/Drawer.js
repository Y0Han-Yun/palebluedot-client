import { withRouter } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: ${props => props.ShowLayOut ? '350' : '0'}px;
  opacity: ${props => props.ShowLayOut ? '1' : '0'};
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

class Drawer extends React.Component {
  render () {
    console.log('props', this.props);
    return (
      <StyledComponent ShowLayOut={this.props.ShowLayOut}>
      <div className="close-button-wrapper">
        <div className="first" />
        <CancelButton>
          <i className="fas fa-times fa-2x button-color" onClick={this.props.onClose}></i>
        </CancelButton>
      </div>
      <div className="Menu-wrapper">
        {this.props.menuList.map(menu => (
          <div key={menu.id} className="LinkWrapper" onClick={() => this.props.history.push(menu.path)}>
            <div>{menu.displayName}</div><i className={`${menu.icon} icon-color`} />
          </div>
        ))}
      </div>
    </StyledComponent>
    );
  }
}

export default withRouter(Drawer);