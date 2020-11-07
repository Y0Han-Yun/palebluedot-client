import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';
import Text from 'src/Component/Text';
import Box from 'src/Pages/Web/Portfolio/Box';

const StyledComponent = styled.div`
  .PortfolioWrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   
    .Portfolio{
      width: 930px;
      height: 500px;
      margin: 50px 0px 20px 0px;
      
      .SubSection{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%; 
        padding-bottom: 20px;
      }
    }

    .BoxSection{
      display: flex;
      justify-content: space-around;
      padding: 20px 10px 10px 10px;
      flex-wrap: wrap; 
    }
  }
`;


class Portfolio extends React.Component {

  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation />
            <div className='PortfolioWrapper'>
              <div className='Portfolio'>
                <div className='SubSection'>
                  <Text home40 white>My Work</Text><br/>
                </div>
                <div className='BoxSection'>
                  <Box><i className="fas fa-gamepad fa-4x" /></Box>
                  <Box><i className="fas fa-gamepad fa-4x" /></Box>
                  <Box><i className="fas fa-gamepad fa-4x" /></Box>
                  <Box><i className="fas fa-gamepad fa-4x" /></Box>
                  <Box><i className="fas fa-gamepad fa-4x" /></Box>
                  <Box><i className="fas fa-gamepad fa-4x" /></Box>
                  <Box><i className="fas fa-gamepad fa-4x" /></Box>
                  <Box><i className="fas fa-gamepad fa-4x" /></Box>
                </div>
              </div>
            </div>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default Portfolio;
