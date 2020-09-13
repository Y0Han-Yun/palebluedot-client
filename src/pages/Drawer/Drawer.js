import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: ${props => props.showing ? '250' : '0'}px;
  opacity: ${props => props.showing ? '1' : '0'};
  height: 100%;
  background-color: #FFFFFF;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.3s;
  .close-button-wrapper {
    padding: 5px;
    display: flex;
    .first {
      flex-grow: 1;
    }
  }
  .Menu-wrapper   {
    padding: 5px;
  }
`;

class Drawer extends React.Component {

  render () {
    return (
      <StyledComponent showing={this.props.showing}>
        <div className="close-button-wrapper">
          <div className="first"></div>
          <div>
            <button onClick={this.props.onClose}>Close</button>
          </div>
        </div>
        <div className="Menu-wrapper">
          <p>sadkjfhasdjkfhksadhfhk</p>
          <p>sadkjfhasdjkfhksadhfhk</p>
          <p>sadkjfhasdjkfhksadhfhk</p>
          <p>sadkjfhasdjkfhksadhfhk</p>
        </div>
      </StyledComponent>
    );
  }

}

export default Drawer;
