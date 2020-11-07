import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';
import Box from 'src/Pages/Web/Skills/Box';
import Text from 'src/Component/Text';

const StyledComponent = styled.div`
  .SkillsWrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .Skills{
      width: 80%;
      height: 500px;
      margin: 50px 0px 20px 0px;

      .SubSection{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10%;
      }
    }
  }

  .BoxSection{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 10px 10px 10px;
    flex-wrap: wrap;
    width: 100%;
    height: 90%;
  }
 
`;


class Skills extends React.Component {

  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation />
            <div className='SkillsWrapper'>
              <div className='Skills'>
                <div className='SubSection'>
                 <Text home40 white>Skills</Text>
                </div>
                <div className='BoxSection'>
                  <Box>
                    <i class="fab fa-js fa-4x" />
                  </Box>
                  <Box className='BoxDesign'>
                    <i class="fab fa-html5 fa-4x" />
                  </Box>
                  <Box className='BoxDesign'>
                    <i class="fab fa-css3-alt fa-4x" />
                  </Box>
                  <Box className='BoxDesign'>
                    <i class="fab fa-react fa-4x" />
                  </Box>
                </div>
              </div>
            </div>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default Skills;
