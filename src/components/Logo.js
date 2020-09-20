import React from 'react';
import { FcGlobe } from 'react-icons/fc';
import { IconContext } from "react-icons";

class Logo extends React.Component {

  render () {
    return (
      <IconContext.Provider
        value={{
          size: this.props.size,
          color: this.props.color
        }}>
        <FcGlobe />
      </IconContext.Provider>
    );
  }

}

export default Logo;
