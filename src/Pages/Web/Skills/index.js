import React from 'react';
import styled from 'styled-components';
import BackGround from "/Users/yoonyohan/Desktop/project/palebluedot-client/src/Images/BackGroundImage.jpg";
const StyledComponent = styled.div``;

const BackGroudImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: auto;
  opacity: 0.6;
  object-fit: cover;
  object-position: 50% 60%;  
`;

const Zindex1 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 1;
`;

class Skills extends React.Component {

  render () {
    return (
      <StyledComponent>
        <BackGroudImage src={BackGround} alt="Skills" />
        <Zindex1>
          <div>asdfsadf</div>
        </Zindex1>
      </StyledComponent>
    );
  }

}

export default Skills;
