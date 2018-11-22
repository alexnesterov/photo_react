import { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';
import { _color, _font } from './constants';

const GlobalStyle = createGlobalStyle`
  /* Reset the box-sizing, position and others */
  html {
    box-sizing: border-box;
    min-width: 320px;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    /* Fix some resize in flexbox elements */
    min-width: 0;
    min-height: 0;
  }
  ::selection {
    color: ${_color.primary};
    /* Fix Chrome selection */
    background: ${rgba(_color.accent, 0.99)};
  }
  ::-moz-selection {
    color: ${_color.primary};
    background: ${_color.accent};
  }
  *:focus {
    outline: none;
  }
  body {
    background: url(${props => props.back}) top center;
    color: ${_color.page};
    font-family: ${_font.primary};
    font-size: 12px;
    line-height: 2;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }
  /* Links */
  a {
    color: blue;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
