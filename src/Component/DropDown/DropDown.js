import React from 'react';
import styled from 'styled-components';
import CloseLayer from 'src/Component/DropDown/CloseLayer';


const StyleComponent = styled.div`
  .ButtonWarpper{
    display:flex;
    background-color: white;
    colo- balck;
    width: 120px;
    height: 30px;
    border-radius: 3px;
  }

  .BoxDesign{ 
    color: black;
    width: 100px;
    display:flex;
    align-items: center;
    justify-content: center;
  }

  .ButtonDesign{
    color: black;
    width: 0px;
    display:flex;
    align-items: center;
    justify-content: center;
  }

  .DropWarpper{
    margin-top: 2px;
    position: absolute;
    background-color: white;
    width: 135px;
    height: 20%;
    border-radius: 3px;
  }

  .DropDesign{
    display: flex;
    colo- balck;
    width: 135px;
    height: 20px;
    margin-top: 5px;
    padding : 5px 0px 5px 0px;

    :hover{
      background-color: #e7e7e7; 
      color: black;
    } 
  }
`;

class DropDown extends React.Component {

  constructor(){
    super();
    this.OpenBox = this.OpenBox.bind(this);
    this.ChangeIcon = this.ChangeIcon.bind(this);
    this.state = {
      Value : 'off'
    }
  };

  OpenBox(){
    this.setState(prevState => {
      if(prevState.Value === 'off') 
        return  {Value : 'on'}
        return {Value: 'off'}
    });
  }

  ChangeIcon(){
    if (this.state.Value === 'off'){
      return (
        <div><i className="fas fa-angle-down"></i></div>
      );
    } else if (this.state.Value === 'on') {
      return (
        <i className="fas fa-angle-up"></i>
      );  
    }
  };

  render () {
    return (
      <StyleComponent>
        <div className='ButtonWarpper'>
          <div className='BoxDesign'>asdasfasf</div>
          <div className='ButtonDesign'onClick={this.OpenBox}>{this.ChangeIcon()}</div>
        </div>
        {this.state.Value === 'on'
        ? (
          <div>
            <CloseLayer Value={this.state.Value} onClick={this.OpenBox}/>
            <div className='DropWarpper'>
              <div className='DropDesign'>
                <div>Tittle</div>   
              </div>
              <div className='DropDesign'>
                <div>Tittle</div>
              </div>
              <div className='DropDesign'>
                <div>Tittle</div>
              </div>
              <div className='DropDesign'>
                <div>Tittle</div>
              </div>
            </div>
          </div>
        ) : null}
      </StyleComponent>
    );
  }
}
export default DropDown;