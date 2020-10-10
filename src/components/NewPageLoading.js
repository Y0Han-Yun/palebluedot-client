import styled from 'styled-components';
import React from 'react';

const loadWebFonts = fontFamilies => new Promise((resolve, reject) => {
  try {
    const WebFont = window.WebFont;
    const webFontOptions = {
      google: {
        families: fontFamilies
      },
      active: () => resolve()
    };
    WebFont.load(webFontOptions);
  }
  catch (err) {
    reject(err);
  }
});

const loadImage = src => new Promise((resolve, reject) => {
  try {
    const image = new Image();
    image.onload = () => resolve();
    image.src = src;
  }
  catch (err) {
    reject(err);
  }
});

const loadImages = sources => new Promise((resolve, reject) => {
  const promises = sources.map(src => loadImage(src));
  Promise.all(promises).then(() => resolve()).catch(err => reject(err));
});

const Loading = styled.div`
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-family: cursive;
`;

const StyledComponent = styled.div`
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 1s;
`;

class NewPageLoading extends React.Component {

  constructor () {
    super();
    this.state = {
      loadingItems: {
        images: true,
        fonts: true
      }
    };
  }

  componentDidMount () {
    loadImages(this.props.images)
      .then(() => this.setState({ loadingItems: { ...Object.assign(this.state.loadingItems, { images: false }) } }))
      .catch(() => this.setState({ loadingItems: { ...Object.assign(this.state.loadingItems, { images: false }) } }));
    loadWebFonts(this.props.fonts)
      .then(() => this.setState({ loadingItems: { ...Object.assign(this.state.loadingItems, { fonts: false }) } }))
      .catch(() => this.setState({ loadingItems: { ...Object.assign(this.state.loadingItems, { fonts: false }) } }));
  }

  render () {
    const isPageLoading = pageLoading => Object.values(pageLoading).filter(status => status).length;
    return (<>
      <Loading show={isPageLoading(this.state.loadingItems) && this.props.showLoading}>
        <h1>LOADING... (로딩중)</h1>
      </Loading>
      <StyledComponent show={!isPageLoading(this.state.loadingItems)}>{this.props.children}</StyledComponent>
    </>);
  }

}

export default NewPageLoading;
