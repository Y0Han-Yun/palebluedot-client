import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  width: 55%;
  height: 100%;
  margin: 0px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 0px 0px 20px;
`;

class LeftSection extends React.Component {

  render () {
    return (<>
      <StyledComponent>
        {this.props.children}
      </StyledComponent>
    </>);
  }

}

export default LeftSection;
