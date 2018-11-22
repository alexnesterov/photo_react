import React from 'react';
import styled from 'styled-components';

import { _color, _font } from '../base/constants';

/**
 * Styled Components
 */
const LogoBlock = styled.a`
  color: ${_color.primary};
  font-family: ${_font.secondary};
  font-size: 36px;
  line-height: 1;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${_color.primary};
  }

  span {
    color: ${_color.accent};
    font-weight: 400;
  }
`;

/**
 * Logo Component
 */
const Logo = () => {
  return (
    <LogoBlock>
      Flux <span>/</span>
    </LogoBlock>
  );
};

export default Logo;
