import React from 'react';
import styled from 'styled-components';
import { font } from '../config/theme';

const fontSize = props => {
  if (props.styledProps.sm) return font.size.sm;
  else if (props.styledProps.md) return font.size.md;
  else if (props.styledProps.lg) return font.size.lg;
  return font.size.normal;
};

const color = props => {
  if (props.styledProps.white) return font.color.darkMode;
  else return font.color.lightMode;
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
  width: 100%;
  white-space: nowrap;
`;

class Text extends React.Component {

  render () {
    const styledProps = {
      white: this.props.white,
      sm: this.props.sm,
      md: this.props.md,
      lg: this.props.lg
    };
    return (
      <StyledComponent styledProps={styledProps}>
        {this.props.children}
      </StyledComponent>
    );
  }

}

export { Text as default, textStyledTemplate };
