import React from 'react';

const Context = React.createContext();
const Provider = Context.Provider;
const Consumer = Context.Consumer;

class ContactProvider extends React.Component {

  constructor () {
    super();
    this.syncNow = this.syncNow.bind(this);
    this.state = {
      now: new Date().toISOString()
    };
  }

  syncNow () {
    this.setState({
      now: new Date().toISOString()
    });
  }

  render () {
    return (
      <Provider
        value={{
          email: 'ohhobs@gmail.com',
          fullName: 'Hyun Ho Oh',
          phone: '0418590976',
          now: this.state.now,
          address: 'Northryde',
          syncNow: this.syncNow
        }}>
        {this.props.children}
      </Provider>
    );
  }

}

export {
  ContactProvider,
  Consumer as ContactConsumer
};
