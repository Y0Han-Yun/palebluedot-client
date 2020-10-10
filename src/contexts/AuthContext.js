import React from 'react';

const Context = React.createContext(null);
const Provider = Context.Provider;
const Consumer = Context.Consumer;

class AuthProvider extends React.Component {

  constructor () {
    super();
    this.setUserEmail = this.setUserEmail.bind(this);
    this.state = {
      userEmail: null
    };
  }

  setUserEmail (userEmail, callback) {
    this.setState({ userEmail }, () => {
      if (callback) callback();
    });
  }

  render () {
    return (
      <Provider value={{
        userEmail: this.state.userEmail,
        setUserEmail: this.setUserEmail}}>
        {this.props.children}
      </Provider>
    );
  }

}

export { 
  AuthProvider,
  Consumer as AuthConsumer 
};
