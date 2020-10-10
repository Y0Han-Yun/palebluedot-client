import React from 'react';
import { withRouter } from 'react-router-dom';
import { CounterConsumer } from './CounterContext';

class SecondPage extends React.Component {

  render () {
    return (
      <div>
        <h1>Second Page</h1>
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
            this.props.history.push('/context-sample');
          }}>
          goto SecondPage
        </button>
      </div>
    );
  }

}

export default withRouter(SecondPage);
