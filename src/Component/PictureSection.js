import React from 'react';
import styled from 'styled-components';
import Faceimage from 'src/Component/Image/Faceimage';

const StyledComponent = styled.div`
  width: 100%;
  height: 400px;
  

  .PictureWrapper{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .MessageWrapper{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .Hello{
      color: #F9DC5C;
      font-size: 100px;
    }
    .spacing{
      padding-left: 20px;
    }
    .Name{
      font-size: 40px;
      color: black;
    }
    .Developer{
      font-size: 40px;
      color: black;
    }
    .YellowColor{
      color: #F9DC5C;
    }
  }

  @media (max-width: 550px) {
    height: 500px;

      .MessageWrapper{
        display: inline;
      }
      .Hello{
        padding-left: 20px;
      }
  }
`;

class PictureSection extends React.Component {

  render () {
    return (
      <StyledComponent>
        <div className="PictureWrapper">
          <Faceimage />
        </div>
        <div className="MessageWrapper">
          <span className="Hello">Hello,</span>
          <div className="spacing">
            <span className="Name">I am <span className="YellowColor">John Yun</span></span>
            <br />
            <span className="Developer"><span className="YellowColor">and</span> Web Developer</span>
          </div>
        </div>
      </StyledComponent>
    );
  }

}
export default PictureSection;
