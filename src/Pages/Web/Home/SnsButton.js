import React from 'react';
import styled from 'styled-components';
import Text from 'src/Component/Text';
import { ContactConsumer } from 'src/Context/ContactContext';

const StyledComponent = styled.div`
  display:flex;

  .linkedin-background{
    display:flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow : hidden;
  }

  .icon-box{
    color: white;
    padding: 0 30px 0 10px;
  }

  .address{
    position: absolute;
    top: -100px;
    left: 60px;
    width: 100%;
    height: 100%;
  }
  
  .linkedin-background:hover{
    transition: all.8s;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #0073B1;
    border-radius: 6px;
    padding-right: 100px;
    height: 45px;  
    cursor: pointer;
    

    .address{
      transition: all.45s;
      top: 8px;
    }
  }

  .github-background{
    display:flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow : hidden;
  }

  .icon-box{
    color: white;
    padding: 0 30px 0 10px;
  }

  .address{
    position: absolute;
    top: -100px;
    left: 60px;
    width: 100%;
    height: 100%;
  }
  .github-background:hover{
    transition: all.8s;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #24292E;
    border-radius: 6px;
    padding-right: 100px;
    height: 45px;  
    cursor: pointer;
    
    .address{
      transition: all.45s;
      top: 8px;
    }
  }

  .email-background{
    display:flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow : hidden;
  }

  .icon-box{
    color: white;
    padding: 0 30px 0 10px;
  }

  .address{
    position: absolute;
    top: -100px;
    left: 60px;
    width: 100%;
    height: 100%;
  }
  .email-background:hover{
    transition: all.8s;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #ea4335;
    border-radius: 6px;
    padding-right: 100px;
    height: 45px;  
    cursor: pointer;
    
    .address{
      transition: all.45s;
      top: 8px;
    }
  }
}
`;

const InvisibleInput = styled.input`
  position: absolute;
  top: -99999px;
`;

class SnsButton extends React.Component {

  constructor () {
    super();
    this.invisibleInputRef = React.createRef();
    this.GotoLinkedin = this.GotoLinkedin.bind(this);
    this.GotoGithub = this.GotoGithub.bind(this);
  }
  GotoLinkedin () {
    window.open('https://www.linkedin.com/in/yohan-yun-0439031aa/');
  }
  GotoGithub () {
    window.open('https://github.com/Y0Han-Yun');
  }

  render () {
    return (
      <StyledComponent>
        <div className="linkedin-background" onClick={this.GotoLinkedin}>
          <span className="icon-box">
            <i className="fab fa-linkedin fa-2x" />
          </span>
          <div className="address">
            <Text white>Click Me</Text>
          </div>
        </div>

        <div className="github-background" onClick={this.GotoGithub}>
          <span className="icon-box">
            <i className="fab fa-github-square fa-2x" />
          </span>
          <div className="address">
            <Text white>Click Me</Text>
          </div>
        </div>
        <div className="email-background">
          <span className="icon-box">
            <i className="fas fa-envelope-square fa-2x" />
          </span>
          <ContactConsumer>
            {contactContext => (
              <div
                onClick={() => {
                  this.invisibleInputRef.current.select();
                  document.execCommand('copy');
                  alert('Email address is copied')
                }}
                className="address">
                <InvisibleInput readOnly ref={this.invisibleInputRef} value={contactContext.email} type="text" />
                <Text white>Copy email</Text>
              </div>
            )}
          </ContactConsumer>
        </div>
      </StyledComponent>
    );
  }

}

export default SnsButton;
