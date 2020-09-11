import React from 'react';
import styled from 'styled-components';
import CloseIcon from './CloseIcon';

const StyledComponent = styled.div`
  position: fixed;
  top: 0;
  ${props => {
    if (!props.side) return 'left: 0;';
    return props.side === 'left' ? 'left: 0;' : 'right: 0;'
  }}
  width: ${props => props.showing ? props.width : '0'}px;
  height: 100%;
  overflow-y: scroll;
  background-color: lightblue;
  z-index: 20;
  ${props => props.animation ? 'transition: all 0.3s;' : ''}
  opacity: ${props => props.showing ? '1' : '0'};
  .closeWrapper {
    padding: 10px 5px;
    display: flex;
    .left {
      width: 0px;
      flex-grow: 1;
    }
  }
  .menu-list {
    padding: 0px 5px;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

class Drawer extends React.Component {

  render () {
    return (
      <StyledComponent
        showing={this.props.showing}
        animation={this.props.animation}
        side={this.props.side}
        width={this.props.width}>
        <div className="closeWrapper">
          <div className="left"></div>
          <div className="right">
            {/* <button onClick={this.props.onCloseClick}>close</button> */}
            <CloseIcon onClick={this.props.onCloseClick} />
          </div>
        </div>
        <div className="menu-list">
          <p>List itemList itemList itemList itemList itemList itemList itemList itemList itemList itemList itemList itemList itemList item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
          <p>List item</p>
        </div>
      </StyledComponent>
    );
  }

}

export default Drawer;
