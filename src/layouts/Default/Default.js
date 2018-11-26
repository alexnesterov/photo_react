import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'normalize.css';
import GlobalStyle from '../../base/GlobalStyle';

import BackImage from './back.jpg';
import Footer from '../../components/Footer';

/**
 * Styled Components
 */
const LayoutBlock = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LayoutContent = styled.div`
  flex: 1 1 100%;
`;

/**
 * Default Layout Component
 */
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle back={BackImage} />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:400,500,700"
          />
        </Helmet>
        <LayoutBlock>
          <LayoutContent>{children}</LayoutContent>
          <Footer text={data.site.siteMetadata.title} />
        </LayoutBlock>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
