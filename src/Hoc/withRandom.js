import React from 'react';

const withRandom = WrappedComponent => {
  return class extends React.Component {
    render () {
      // {...this.props} => WrappedComponent를 실제로 사용하는 부모에서 내려준 props
      return <WrappedComponent generate={() => {
        const min = 0;
        const max = 100;
        return Math.floor(Math.random() * (max - min + 1) + min);
      }} {...this.props} />
    }
  };
};

export default withRandom;
