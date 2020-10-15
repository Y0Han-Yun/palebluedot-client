import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  width: 100%;
  height: 400px;
  background-color: blue;

  .PictureWrapper{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    .Picture{
      background-color: yellow;
    }
  }
  
  .MessageWrapper{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    .Message{
      background-color: red;
    }
  }
`;

class PictureSection extends React.Component {

  render () {
    return (
      <StyledComponent>
        <div className='PictureWrapper'>
          <div className="Message">message</div>
        </div>
        <div className='MessageWrapper'>
          <h1 className="Message">message</h1>
        </div>
      </StyledComponent>
    );
  }

}
export default PictureSection;
