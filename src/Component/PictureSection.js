import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  width: 100%;
  height: 400px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;

  .Picture{
    background-color: yellow;
  }
  .Message{
    background-color: red;
  }
`;

class PictureSection extends React.Component {
  render () {
    return (
      <StyledComponent>
        <div className='Picture'>picture</div>
        <div className='Message'>message</div>
      </StyledComponent>
    );
  }
}
export default PictureSection;