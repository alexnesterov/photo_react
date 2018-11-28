import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/Main';
import PostList from '../components/PostList';
import Info from '../components/Info';

/**
 * Index Page Component
 */
const IndexPage = ({ data }) => (
  <Layout>
    <PostList posts={data.allMarkdownRemark.edges} />
    <Info />
  </Layout>
);

/**
 * Query
 */
export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { component: { eq: "Work" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      totalCount
      edges {
        node {
          id
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
          excerpt
          html
        }
      }
    }
  }
`;

export default IndexPage;
