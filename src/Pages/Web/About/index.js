import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';
import withRandom from 'src/Hoc/withRandom';
import { ContactConsumer } from 'src/Context/ContactContext';

const StyledComponent = styled.div``;

class About extends React.Component {

  constructor () {
    super();
    this.state = {
      randomNumber: 0
    };
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({
        randomNumber: this.props.generate()
      });
    }, 100);
  }

  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation />
          <div>About Page</div>
          <h1>생성된 랜던 숫자: {this.state.randomNumber}</h1>
          <ContactConsumer>
            {contactValue => (<>
              <div>Email: {contactValue.email}</div>
              <div>Full name: {contactValue.fullName}</div>
              <div>Phone: {contactValue.phone}</div>
              <div>Now: {contactValue.now}</div>
              <button onClick={contactValue.syncNow}>update time</button>
            </>)}
          </ContactConsumer>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default withRandom(About);
