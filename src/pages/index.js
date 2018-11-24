import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/Main';
import PostList from '../components/PostList';

/**
 * Index Page Component
 */
const IndexPage = ({ data }) => (
  <Layout>
    <PostList posts={data.allMarkdownRemark.edges} />
  </Layout>
);

/**
 * Query
 */
export const query = graphql`
  query IndexPageQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;

export default IndexPage;
