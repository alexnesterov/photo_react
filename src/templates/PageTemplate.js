import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/Main';
import PageTitle from '../components/PageTitle';
import Text from '../components/Text';

/**
 * PageTemplate Component
 */
const PageTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <PageTitle title={frontmatter.title} />
      <Text value={html} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;

export default PageTemplate;
