import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { _color, _font } from '../base/constants';

import { Link } from 'gatsby';

/**
 * Styled Components
 */
const LogoBlock = styled(Link)`
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
const Logo = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query LogoQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <LogoBlock to="/">
          {data.site.siteMetadata.title} <span>/</span>
        </LogoBlock>
      )}
    />
  );
};

export default Logo;
