import React from 'react';
import styled from 'styled-components';


const StyleComponent = styled.div`
  .ButtonWarpper{
    display:flex;
    background-color: white;
    colo- balck;
    width: 120px;
    height: 20px;
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
    width:30px;
    display:flex;
    align-items: center;
    justify-content: center;

  }

  .DropWarpper{
    margin-top: 2px;
   
  }
  .DropDesign{
    display: flex;
    background-color: white;
    colo- balck;
    width: 120px;
    height: 20px;

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
    // this.ChangeIcon = this.ChangeIcon.bind(this);
    this.state = {
      Value : false
    }
  };

  OpenBox(){
    if(this.state.Value === false) {
      this.setState({
       Value : true
      })
    } else if(this.state.Value === true){
      this.setState({
        Value: false
      })
    }
  };

  ChangeIcon(){
    if (this.state.Value === false){
      return (
        <div><i className="fas fa-angle-down"></i></div>
      );
    } else if (this.state.Value === true) {
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
        {this.state.Value === true
        ? (
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
        ) : null}
      </StyleComponent>
    );
  }
}
export default DropDown;