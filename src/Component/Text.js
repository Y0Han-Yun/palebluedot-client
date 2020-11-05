import React from 'react';
import styled from 'styled-components';
import { font } from 'src/Config/Theme';

const fontSize = props => {
  if (props.styledProps.sm) return font.size.sm;
  else if (props.styledProps.md) return font.size.md;
  else if (props.styledProps.lg) return font.size.lg;
  else if (props.styledProps.home100) return font.size.home100;
  else if (props.styledProps.home40) return font.size.home40;
  return font.size.normal;
};

const color = props => {
  if (props.styledProps.white) return font.color.darkMode;
  if (props.styledProps.drawer) return font.color.drawer;
  if (props.styledProps.yellow) return font.color.yellow;
  return font.color.lightMode;
};

const textStyledTemplate = props => `
  font-family: ${font.family.sans};
  font-size: ${fontSize(props)};
  color: ${color(props)};
  font-weight: ${font.weight.light};
  line-height: ${font.lineHeight.normal};
  letter-spacing: ${font.letterSpacing.none};
  word-spacing: ${font.wordSpacing.normal};
`;

const StyledComponent = styled.span`
  ${props => textStyledTemplate(props)}
`;

class Text extends React.Component {

  render () {
    const styledProps = {
      white: this.props.white,
      drawer: this.props.drawer,
      yellow: this.props.yellow,
      sm: this.props.sm,
      md: this.props.md,
      lg: this.props.lg,
      home100: this.props.home100,
      home40: this.props.home40
    };

    return (
      <StyledComponent styledProps={styledProps}>
        {this.props.children}
      </StyledComponent>
    );
  }

}

export { Text as default, textStyledTemplate };
