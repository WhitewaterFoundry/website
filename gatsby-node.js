const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  return graphql(`
    query loadPostsQuery {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              date
              path
              title
              author
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        path: edge.node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          html: edge.node.html,
          date: edge.node.frontmatter.date,
          title: edge.node.frontmatter.title,
          author: edge.node.frontmatter.author,
        },
      })
    })
  })
}
