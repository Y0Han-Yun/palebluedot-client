import React from 'react';
import { FcGlobe } from 'react-icons/fc';
// import { font, logo } from '../config/theme';

// const LogoSize = props => {
//   if (props.styledProps.main) return logo.size.main;
//   if (props.styledPros.navi) return logo.size.navi;
//   if (props.styledProps.burger) return logo.size.burger;
//   return font.size.normal;
// };

class Logo extends React.Component {

  render () {
    // const styledProps = {
    //   main: this.props.main,
    //   navi: this.props.navi,
    //   burger: this.props.burger
    // };

    return <FcGlobe />;
  }

}

export default Logo;
