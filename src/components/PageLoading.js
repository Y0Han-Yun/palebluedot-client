import React from 'react';
import styled from 'styled-components';

const Loading = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledComponent = styled.div`
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 1s;
`;

class PageLoading extends React.Component {

  render () {
    const isPageLoading = pageLoading => Object.values(pageLoading).filter(status => status).length;
    return (<>
      <Loading show={isPageLoading(this.props.target) && this.props.showLoading}>
        <h1>LOADING...</h1>
      </Loading>
      <StyledComponent show={!isPageLoading(this.props.target)}>{this.props.children}</StyledComponent>
    </>);
  }

}

export default PageLoading;
