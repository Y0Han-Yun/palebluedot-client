import React from 'react';
import styled from 'styled-components';
import TriggerButton from './TriggerButton';
import Notification from './Notification';

const Center = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class NotificationSample extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      showNotification: false,
      success: false,
      error: false,
      message: ''
    };
  }

  render () {
    return (<>
      <Notification
        showing={this.state.showNotification}
        onClick={() => this.setState({ showNotification: false })}
        setShowing={value => this.setState({ showNotification: value })}
        success={this.state.success} error={this.state.error}
        timeout={2000}
        top right>
        {this.state.message}
      </Notification>
      <Center>
        <TriggerButton onClick={() => this.setState({ showNotification: true, success: true, error: false, message: '[SUCCESS] Fetching data' })}>success</TriggerButton>
        <TriggerButton onClick={() => this.setState({ showNotification: true, success: false, error: true, message: '[ERROR] Internal server propblem' })}>error</TriggerButton>
      </Center>
    </>);
  }

}

export default NotificationSample;
