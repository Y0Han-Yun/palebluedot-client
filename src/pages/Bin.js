import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';
import PageLoading from '../components/PageLoading';
import withPageLoading from '../hocs/withPageLoading';

const Container = styled.div``;

class Bin extends React.Component {

  constructor () {
    super();
    this.state = {
      pageLoading: {
        images: true,
        fonts: true
      }
    };
  }

  componentDidMount () {
    this.props.loadImages(['https://wallpaperaccess.com/full/30100.jpg']).then(() => {
      this.setState({
        pageLoading: { ...Object.assign(this.state.pageLoading, { images: false }) }
      });
    }).catch();
    this.props.loadFonts(['Dancing Script']).then(() => {
      this.setState({
        pageLoading: { ...Object.assign(this.state.pageLoading, { fonts: false }) }
      });
    }).catch();
  }

  render () {
    return (
      <Container>
        <PageLoading target={this.state.pageLoading}>
          <Navigation />
          <img src="https://wallpaperaccess.com/full/30100.jpg" alt="x" />
        </PageLoading>
      </Container>
    );
  }

}

export default withPageLoading(Bin);
