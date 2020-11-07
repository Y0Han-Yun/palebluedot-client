import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';
import withRandom from 'src/Hoc/withRandom';
import Text from 'src/Component/Text';
import AboutExplanation from 'src/Pages/Web/About/AboutExplanation';
import AboutPageImage from 'src/Component/Image/AboutPageImage';

const StyledComponent = styled.div`
  .about-wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .about{
      width: 1400px;
      height: 500px;
      margin: 30px 0px 20px 0px;

      .sub-section{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;
      }
      .box-section{
        width: 100%;
        height: 100%;
        display: flex;
        

        .left-section{
          width: 100%;
          height: 100%;
          margin: 10px;
          box-shadow: 0 8px 6px -6px black;
        }
        .right-section{
          width: 100%;
          height: 100%;
          margin: 5px;
        }
      }
    }
  }
  
  @media (max-width: 1028px) {
    
    .box-section{
      flex-wrap: wrap; 
    }
  }
`;

class About extends React.Component {

  constructor () {
    super();
    this.state = {
      randomNumber: 0
    };
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        randomNumber: this.props.generate()
      });
    }, 100);
  }

  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation />
          <div className='about-wrapper'>
            <div className='about'>
              <div className='sub-section'>
                <Text home40 white>About Me</Text><br/>
              </div>
              <div className='box-section'>
                <div className='left-section'>
                  <AboutPageImage />
                </div>
                <div className='right-section'>
                  <AboutExplanation />
                </div>
              </div>
            </div> 
          </div>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default withRandom(About);
