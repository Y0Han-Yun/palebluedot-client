import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  width: 100%;
  height: 400px;
  background-color: black;

  .PictureWrapper{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .Picture{
      background-color: yellow;
      width: 150px;
      height: 150px;
      border-radius: 70%;
      overflow: hidden;
    }
  }
  
  .MessageWrapper{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .Message{
      background-color: red;
    }
  }

  @media (max-width: 550px) {
    height: 500px;
  }
`;

class PictureSection extends React.Component {

  render () {
    return (
      <StyledComponent>
        <div className="PictureWrapper">
          <div className="Picture">Profile Picture here</div>
        </div>
        <div className="MessageWrapper">
          <h1 className="Message">Message Like Say Hello</h1>
        </div>
      </StyledComponent>
    );
  }

}
export default PictureSection;
