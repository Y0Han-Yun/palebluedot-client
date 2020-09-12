import React from "react";
import styled from 'styled-components';

const StyledComponent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: ${props => props.showing ? '250' : '0'}px;
  opacity: ${props => props.showing ? '1' : '0'};
  height: 100%;
  background-color: #FFFFFF;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: all 0.3s;
  .close-button-wrapper{
    display: flex;
    padding: 5px;
    
    .first {
        flex-grow: 1;
    }
  }
`;

class Drawer extends React.Component{

  render () {
    return (
       <StyledComponent showing={this.props.showing}>
         <div className="close-button-wrapper">
           <div className="first"></div>
           <div>
            <button onClick={this.props.onClose}>close</button>
           </div>
         </div>
         <div>
           <h1>안녕sssdasdasddasdasdasdasdsdasdas</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>
           <h1>안녕</h1>

         </div>
         </StyledComponent>
    );
  }
}

export default Drawer;