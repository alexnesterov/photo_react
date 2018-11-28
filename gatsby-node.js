/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');
const Promise = require(`bluebird`);

/**
 * Create Pages
 */
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    /**
     * Pages
     */
    graphql(`
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
    `)
      .then(result => {
        if (result.errors) {
          return Promise.reject(result.errors);
        }

        const pageTemplate = path.resolve(`src/templates/PageTemplate.js`);

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: pageTemplate,
            context: {}, // additional data can be passed via context
          });
        });
      })

      /**
       * Work
       */
      .then(() => {
        graphql(`
          {
            allMarkdownRemark(
              filter: { frontmatter: { component: { eq: "Work" } } }
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

          const workTemplate = path.resolve(`src/templates/WorkTemplate.js`);

          result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
              path: `/work${node.frontmatter.path}`,
              component: workTemplate,
              context: {
                slug: node.frontmatter.path
              }, // additional data can be passed via context
            });
          });
          resolve();
        });
      });
  });
};
