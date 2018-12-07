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

  a {
    display: inline-block;
    color: ${_color.primary};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: ${_color.accent};
    }

    &._active {
      color: ${_color.accent};
    }
  }
`;

/**
 * Navigation Component
 */
const Navigation = ({ props }) => {
  // this link will be active when itself or deeper routes
  // are current
  const isPartiallyActive = ({ isPartiallyCurrent }) => {
    return isPartiallyCurrent ? { className: '_active' } : null;
  };

  return (
    <NavigationBlock>
      <NavigationList>
        <NavigationItem>
          <Link to="/" activeClassName="_active">
            Home
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/about/" activeClassName="_active">
            About
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/work/" getProps={isPartiallyActive}>
            Work
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link to="/contact/" activeClassName="_active">
            Contact
          </Link>
        </NavigationItem>
      </NavigationList>
    </NavigationBlock>
  );
};

export default Navigation;
