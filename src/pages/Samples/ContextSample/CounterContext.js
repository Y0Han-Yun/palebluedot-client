import React from 'react';

const Context = React.createContext();
const Provider = Context.Provider;
const Consumer = Context.Consumer;

class CounterProvider extends React.Component {

  constructor () {
    super();
    this.addCounter = this.addCounter.bind(this);
    this.state = {
      counter: 0
    };
  }

  addCounter() {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render () {
    return (
      <Provider
        value={{
          counter: this.state.counter,
          addCounter: this.addCounter
        }}>
        {this.props.children}
      </Provider>
    );
  }

}

/**
 * Provider => 가장 부모
 * Consumer => 사용하는 그곳
 */
export { CounterProvider, Consumer as CounterConsumer };