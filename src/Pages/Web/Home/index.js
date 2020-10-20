import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';
import PictureSection from 'src/Component/PictureSection';

const StyledComponent = styled.div`
  .ProfileSection { 
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 120px;
  }
  @media (max-width: 550px) {
    .ProfileSection{
      margin-top: 60px;
    }
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
