import React from 'react';
import styled from 'styled-components';
import BackGround from '/Users/yoonyohan/Desktop/project/palebluedot-client/src/Images/BackGround.jpg';

const StyledComponent = styled.div``;

class Skills extends React.Component {

  render () {
    return (
      <StyledComponent>
        <img src={BackGround} alt='Skills' />
      </StyledComponent>
    );
  }

}

export default Skills;
