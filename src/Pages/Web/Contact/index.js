import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';

const StyledComponent = styled.div`
  .ContactWrapper{
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

        .Font{
          font-size: 40px;
            color: black;
        }
      }
    }
  }

  .BoxSection{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 10px 10px 10px;
    width: 100%;
    height: 90%;
  }
`;

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
                <span className='Font'>Contact</span><br/>
              </div>
              <div className='BoxSection'>
                <i className="fab fa-linkedin fa-5x" />                
                <i className="fab fa-github-square fa-5x" />
                <i class="fas fa-envelope-square fa-5x" />
              </div>
            </div>
          </div>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default Contact;
