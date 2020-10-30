import React from 'react';
import styled from 'styled-components';
import BackGround from 'src/Component/Image/BackGround';
import Navigation from 'src/Component/Navigation/Bar';
import withRandom from 'src/Hoc/withRandom';
import { ContactConsumer } from 'src/Context/ContactContext';
import MousePosition from 'src/Component/MousePosition';
import DropDown from 'src/Component/DropDown/DropDown';
const StyledComponent = styled.div`
  .Dropnav{
    display:flex;
  }
`;

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
          {/* <h1>생성된 랜던 숫자: {this.state.randomNumber}</h1> */}

          <ContactConsumer>
            {Value => (<>
              <div>Email: {Value.email}</div>
              <div>Full name: {Value.fullName}</div>
              <div>Phone: {Value.phone}</div>
              <div>Now: {Value.now}</div>
              <div>address: {Value.address}</div>
              <button onClick={Value.syncNow}>update time</button>
            </>)}
          </ContactConsumer>

          <MousePosition>
            {position => (
              <div>x: {position.x}, y: {position.y}</div>
            )}
          </MousePosition>
          <div className='Dropnav'>
            <DropDown />
            
          </div>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default withRandom(About);
