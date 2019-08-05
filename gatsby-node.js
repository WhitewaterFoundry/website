const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/components/blog/BlogTemplate.tsx`)

  return graphql(`
    query loadPostsQuery {
      allMdx(filter: { fileAbsolutePath: { regex: "/blog-posts/.*/" } }) {
        edges {
          node {
            body
            frontmatter {
              title
              author
              date
              path
              keywords
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMdx.edges.forEach(edge => {
      createPage({
        path: edge.node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          body: edge.node.body,
          date: edge.node.frontmatter.date,
          title: edge.node.frontmatter.title,
          author: edge.node.frontmatter.author,
        },
      })
    })
  })
}
