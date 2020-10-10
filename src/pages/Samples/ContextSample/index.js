import React from 'react';
import { withRouter } from 'react-router-dom';
import { CounterConsumer } from './CounterContext';

class ContextSample extends React.Component {

  render () {
    return (
      <div>
        <h1>First Page</h1>
        <CounterConsumer>
          {(value) => {
            return (<>
              <p>Counter: {value.counter}</p>
              <button
                onClick={() => {
                  value.addCounter();
                }}>
                Add
              </button>
            </>);
          }}
        </CounterConsumer>
        <button
          onClick={() => {
            this.props.history.push('/context-sample/second');
          }}>
          goto SecondPage
        </button>
      </div>
    );
  }

}

export default withRouter(ContextSample);
