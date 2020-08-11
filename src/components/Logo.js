import React from 'react';
import { FcGlobe } from 'react-icons/fc';

class Logo extends React.Component {
  render () {
    const styledProps = {
      primary: this.props.primary,
      secondary: this.props.secondary,
      tertiary: this.props.tertiary
    };
    return (<>
      <FcGlobe styledProps={styledProps} size="100"/>
    </>);
  }

}

export default Logo;
