import React from 'react';
import styled from 'styled-components';
import Faceimage from 'src/Component/Image/Faceimage';
import Text from 'src/Component/Text';
import SnsButton from 'src/Component/SnsButton';

const StyledComponent = styled.div`
  width: 100%;
  height: 400px;

  .PictureWrapper{
    width: 100%;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .sns-section{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .MessageWrapper{
    width: 100%;
    height: 45%;
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
          <span className="Hello"><Text home100 yellow>Hello,</Text></span>
          <div className="spacing">
            <span className="Name"><Text home40 white>I am</Text></span><span><Text home40 yellow >John Yun</Text></span>
            <br />
            <span className="Developer"><span><Text home40 yellow>and</Text></span><Text home40 white>Web Developer</Text></span>
          </div>
        </div>
        <div className='sns-section'>
          <SnsButton />
        </div>
      </StyledComponent>
    );
  }

}
export default PictureSection;
