import React from 'react';
import styled from 'styled-components';

import { _media, _color } from '../base/constants';

/**
 * Styled Components
 */
const NavigationBlock = styled.nav`
  font-size: 12px;
  line-height: 1;
`;

const NavigationList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavigationItem = styled.li`
  margin-top: 12px;
  text-transform: uppercase;
  font-weight: 500;

  &:first-child {
    margin-top: 0;
  }

  ${_media.mobile`
    display: inline-block;
    margin-top: 0;
    padding: 0 10px;
  `}
`;

const NavigationLink = styled.a`
  display: inline-block;
  color: ${_color.primary};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${_color.accent};
  }
`;

/**
 * Navigation Component
 */
const Navigation = () => {
  return (
    <NavigationBlock>
      <NavigationList>
        <NavigationItem>
          <NavigationLink>Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>About</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>Work</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink>Contact</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationBlock>
  );
};

export default Navigation;
