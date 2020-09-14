import React from 'react';
import AppBarLayout from './AppBarLayout';

class AppBarLayoutSample extends React.Component {

  render () {
    return (
      <AppBarLayout sticky>
        <h1>Start</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>Hello, world!</h1>
        <h1>End</h1>
        <button onClick={() => window.scrollTo(0, 0)}>top</button>
      </AppBarLayout>
    );
  }

}

export default AppBarLayoutSample;
