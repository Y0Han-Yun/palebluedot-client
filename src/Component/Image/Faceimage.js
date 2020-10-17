import React from 'react';
import styled from 'styled-components';
import FacePicture from 'src/Images/FacePicture.jpg';

const StyledComponent = styled.div`
  position: fixed;
  width: 150px;
  height: 150px;
  border-radius: 70%;
  overflow: hidden;
  z-index: auto;
`;
const Image = styled.img`
  object-fit: cover;
  object-position: 60% 50%;
  z-index: 1;
`;

class Faceimage extends React.Component {
  render () {
    return (
      <StyledComponent>
        <Image src={FacePicture} alt='FaceImage' />
      </StyledComponent>
    );
  }
}

export default Faceimage;