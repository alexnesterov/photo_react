import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../layouts/Main';
import PageTitle from '../components/PageTitle';
import Text from '../components/Text';

/**
 * Styled Components
 */
const WorkDate = styled.div`
  margin-top: -15px;
  margin-bottom: 15px;
`;

const WorkImage = styled(Img)`
  display: block;
  max-width: 100%;
  margin-bottom: 30px;
`;

const WorkContent = styled(Text)``;

/**
 * WorkTemplate Component
 */
const WorkTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <PageTitle title={frontmatter.title} />
      <WorkDate>{frontmatter.date}</WorkDate>
      <WorkImage
        fluid={frontmatter.image.childImageSharp.fluid}
        alt={frontmatter.image.name}
      />
      <WorkContent value={html} />
    </Layout>
  );
};

export const workQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        path
        title
        date(formatString: "DD MMMM, YYYY")
        image {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default WorkTemplate;
