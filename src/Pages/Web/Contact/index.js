import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';
import Text from 'src/Component/Text';

const StyledComponent = styled.div`
  .ContactWrapper{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .Contact{
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

  .icon-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .text-section{
    padding: 20px;
  }
`;

const LinkedinSection = styled.div`
  width: 250px;
  height: 55px;
  background-color: #0073B1;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
const GithubSection = styled.div`
  width: 250px;
  height: 55px;
  background-color: #24292E;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;`;
const EmailSection = styled.div`
  width: 250px;
  height: 55px;
  background-color: #ea4335;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;`;

class Contact extends React.Component {

  constructor() {
    super();
    this.sayHello = this.sayHello.bind(this);
  }
  sayHello () {
    console.log('Hello');
  }
  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation />
          <div className='ContactWrapper'>
            <div className='Contact'>
              <div className='SubSection'>
               <Text home40 white>Contact</Text><br/>
              </div>
              <div className='icon-section'>
                <LinkedinSection>
                  <span style={{color:"white"}}><i className="fab fa-linkedin fa-3x" /></span>
                  <div className='text-section'><Text white>yyh1283@gmail.com</Text></div>
                </LinkedinSection>
                <GithubSection>
                  <span style={{color:"white"}}> <i className="fab fa-github-square fa-3x" /></span>
                  <div className='text-section'><Text white>yyh1283@gmail.com</Text></div>
                </GithubSection>
                <EmailSection>
                  <span style={{color:"white"}}><i class="fas fa-envelope-square fa-3x" /></span>
                  <div className='text-section'><Text white>yyh1283@gmail.com</Text></div>
                </EmailSection>
              </div>
            </div>
          </div>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default Contact;
