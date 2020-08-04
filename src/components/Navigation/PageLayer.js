import React from 'react';
import styled from 'styled-components';


const StyledComponent = styled.div`
  width:400px;
  height:790px;
  background-color: black;
  opacity: .8; 
  z-index: -1;
  position: absolute;
`;

class PageLayer extends React.Component {
  render () {
    return (<>
      <StyledComponent/>
    </>);
  }
}

export default PageLayer;