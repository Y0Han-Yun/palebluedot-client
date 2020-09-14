import React from 'react';
import StyledComponent from './StyledComponent';

class Notification extends React.Component {

  constructor (props) {
    super(props);
    this.manageTimeout = this.manageTimeout.bind(this);
    this.timeoutId = null;
  }

  manageTimeout () {
    if (this.props.showing && !this.timeoutId) {
      this.timeoutId = setTimeout(() => {
        this.props.setShowing(false);
      }, this.props.timeout);
    }
    if (this.props.showing && this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.props.setShowing(false);
      }, this.props.timeout);
    }
    if (!this.props.showing && this.timeoutId) clearTimeout(this.timeoutId);
  }

  render () {
    this.manageTimeout();
    const styledProps = {
      error: this.props.error,
      info: this.props.info,
      top: this.props.top,
      left: this.props.left,
      right: this.props.right,
      bottom: this.props.bottom
    };
    return (
      <StyledComponent
        showing={this.props.showing}
        onClick={this.props.onClick}
        styledProps={styledProps}>
        <p>{this.props.children}</p>
      </StyledComponent>
    )
  }

}

export default Notification;
