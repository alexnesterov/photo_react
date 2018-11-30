import React from 'react';
import styled from 'styled-components';

import { _media, _color } from '../base/constants';

import { Link } from 'gatsby';

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

const NavigationLink = styled(Link)`
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
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/about/">About</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/work/">Work</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/contact/">Contact</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationBlock>
  );
};

export default Navigation;
