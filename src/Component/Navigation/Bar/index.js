import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  background-color: yellow;
  width: 100%;
  height: 10%;
  display: flex;
  // justify-content: center;
  align-items: center;
  
  .NameSection{
    width: 50%;

    .PaddingLeft {
      padding-left: 50px;
    }
  }
  .MenuSetion{
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content:space-evenly;
  }
`;


class Navigation extends React.Component {
  render () {
    return (
      <StyledComponent>
        <div className='NameSection'>
          <div className='PaddingLeft'>YoHan Yun</div>
        </div>
        <div className='MenuSetion'>
          <div>Home</div>
          <div>About</div>
          <div>Skills</div>
          <div>Portfolio</div>
          <div>Contact</div>
        </div>
      </StyledComponent>
    );
  }
}

export default Navigation;