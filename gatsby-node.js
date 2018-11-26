/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');


/**
 * Create PageTemplate Pages
 */
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve(`src/templates/PageTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { component: { eq: "PageTemplate" } } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
        context: {}, // additional data can be passed via context
      });
    });
  });
};
