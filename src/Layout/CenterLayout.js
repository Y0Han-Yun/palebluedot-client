import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  .flex {
    width: 100%;
    padding-top: 13rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .constrain {
<<<<<<< HEAD
      width: 410px;
=======
      width: 300px;
>>>>>>> 54b6727bef50348e98907e9ba7c4d53746dcb8dc
      padding: 0rem 1rem;
    }
  }
`;

class CenterLayout extends React.Component {

  render () {
    const styledProps = {};
    return (
      <StyledComponent styledProps={styledProps}>
        <div className="flex">
          <div className="constrain">
            {this.props.children}
          </div>
        </div>
      </StyledComponent>
    );
  }

}

export default CenterLayout;
