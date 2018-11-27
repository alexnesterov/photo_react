import React from 'react';

import Layout from '../layouts/Main';
import PageTitle from '../components/PageTitle';
import PostList from '../components/PostList';

/**
 * Work Page Component
 */
const WorkPage = ({ data }) => {
  return (
    <Layout>
      <PageTitle title="Work" />
      <PostList posts={data.allMarkdownRemark.edges} />
    </Layout>
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

export default WorkPage;
