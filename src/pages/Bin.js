import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/Navigation/Navigation';
import NewPageLoading from '../components/NewPageLoading';
import withPageLoading from '../hocs/withPageLoading';
import { Redirect } from 'react-router-dom';
import { AuthConsumer } from '../contexts/AuthContext';

const Container = styled.div``;

class Bin extends React.Component {

  render () {
    return (
      <AuthConsumer>
        {value => {
          if (value.userEmail) {
            return (
              <NewPageLoading
                images={['https://wallpaperaccess.com/full/30100.jpg']}
                fonts={['Dancing Script']}>
                <Container>
                  <Navigation />
                </Container>
                <img src="https://wallpaperaccess.com/full/30100.jpg" alt="x" />
              </NewPageLoading>
            );
          }
          return <Redirect to="/" />;
        }}
      </AuthConsumer>
    );
  }

}

export default withPageLoading(Bin);
