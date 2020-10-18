import React from 'react';
import styled from 'styled-components';
import FacePicture from 'src/Images/FacePicture.jpg';

const StyledComponent = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 70%;
  overflow: hidden;
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
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