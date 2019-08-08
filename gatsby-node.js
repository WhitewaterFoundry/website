const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/components/Blog/BlogTemplate.js`)

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

    let uniquePathVerification = {}

    result.data.allMdx.edges.forEach(edge => {
      const path = edge.node.frontmatter.path
      if (uniquePathVerification[path] === true) {
        throw Error(
          `An error occured while creating blog posts: A blog post with the path ${path} already exists`
        )
      }

      uniquePathVerification[path] = true

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
