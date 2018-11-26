import React from 'react';
import styled from 'styled-components';

import { _color, _media } from '../../base/constants';
import { StaticQuery, graphql } from 'gatsby';

import underline from './underline.jpg';

/**
 * Styled Components
 */
const InfoBlock = styled.div`
  padding: 40px 0;
`;

const InfoTitle = styled.h2`
  margin: 0 0 20px;
  color: ${_color.primary};
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;

  &:after {
    content: '';
    display: block;
    height: 3px;
    margin: 5px 0 0;
    background: url(${underline}) repeat-x;
    opacity: 0.1;
  }
`;

const InfoContent = styled.div`
  display: flex;
  margin-left: -15px;
  margin-right: -15px;

  ${_media.phone`
    display: block;
  `}

  p {
    margin: 24px 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const InfoCol = styled.div`
  padding: 0 15px;
  flex: 0 0 50%;
  max-width: 50%;

  ${_media.phone`
    max-width: 100%;
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`;

/**
 * Inco Component
 */
const Info = () => {
  return (
    <StaticQuery
      query={graphql`
        query InfoQuery {
          allMarkdownRemark(
            filter: { frontmatter: { component: { eq: "Info" } } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  component
                  title
                  col1
                  col2
                }
              }
            }
          }
        }
      `}
      render={({ allMarkdownRemark }) => (
        <InfoBlock>
          <InfoTitle>
            {allMarkdownRemark.edges[0].node.frontmatter.title}
          </InfoTitle>
          <InfoContent>
            <InfoCol
              dangerouslySetInnerHTML={{
                __html: allMarkdownRemark.edges[0].node.frontmatter.col1,
              }}
            />
            <InfoCol
              dangerouslySetInnerHTML={{
                __html: allMarkdownRemark.edges[0].node.frontmatter.col2,
              }}
            />
          </InfoContent>
        </InfoBlock>
      )}
    />
  );
};

export default Info;
