import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';
import PictureSection from 'src/Pages/Web/Home/PictureSection';

const StyledComponent = styled.div`
  .ProfileSection { 
    width: 100%;
    height: 100%;
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
            <div className='ProfileSection'>
              <PictureSection />
            </div>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default Home;
