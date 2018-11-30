import React from 'react';
import { graphql } from 'gatsby';

import PageTitle from '../components/PageTitle';
import PostList from '../components/PostList';

/**
 * Work Page Component
 */
const WorkPage = ({ data }) => {
  return (
    <>
      <PageTitle title="Work" />
      <PostList posts={data.allMarkdownRemark.edges} />
    </>
  );
};

/**
 * Work Page Query
 */
export const query = graphql`
  query WorkPageQuery {
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

export default WorkPage;
