import React from 'react';
import styled from 'styled-components';
import BackGroundImage from '/Users/yoonyohan/Desktop/project/palebluedot-client/src/Images/BackGroundImage.jpg';

const StyledComponent = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: auto;
  opacity: 0.6;
  object-fit: cover;
  object-position: 50% 60%;  

  .Z-index1 {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    z-index: 1;
  }
`;


class BackGround extends React.Component {
  render () {
    return (<>
      <StyledComponent src={BackGroundImage} alt="BackGouund">
         <div className="Z-index1">
           {this.props.children}
         </div>
      </StyledComponent>
    </>);
  }
}

export default BackGround;