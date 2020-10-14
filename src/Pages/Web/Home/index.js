import React from 'react';
import styled from 'styled-components';
import BackGround from '../../../Component/BackGround';
import Navigation from '../../../Component/Navigation/Bar';
import PictureSection from '../../../Component/PictureSection';

const StyledComponent = styled.div`
a.{
  width: 100%;
  heigth: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
`;

class Home extends React.Component {

  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation/>
          <div className='a'>
            <PictureSection />
          </div>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default Home;
