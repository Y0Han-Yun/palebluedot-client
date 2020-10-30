import React from 'react';
import styled from 'styled-components';
import BackGroundImage from 'src/Images/BackGroundImage.jpg';

const StyledComponent = styled.div``;
const Image = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: auto;
  object-fit: cover;
  object-position: 50% 60%;
  
`;
const BlackBackGound = styled.div`
  position: fixed;
  background-color: black;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
`;
const Zindex1 = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  z-index: 1;
`;

class BackGround extends React.Component {

  render () {
    return (<>
      <StyledComponent >
        <Image src={BackGroundImage} alt="BackGouund" />
        <BlackBackGound/>
        <Zindex1>
            {this.props.children}
        </Zindex1>
      </StyledComponent>
    </>);
  }

}

export default BackGround;