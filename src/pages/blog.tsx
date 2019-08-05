import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
//@ts-ignore
import SEO from "../components/seo"
import CopyContainer from "../components/Common/CopyContainer"
import PengwinBlogHero from "../svg/pengwin-blog-hero"
import PostHeading from "../components/Blog/BlogHeading"

type PostExcerpt = {
  html: string
  path: string
  title: string
  keywords: string[]
}

const Blog = () => {
  const data = useStaticQuery(graphql`
    query loadPostsQuery {
      allMdx(filter: { fileAbsolutePath: { regex: "/blog-posts/.*/" } }) {
        edges {
          node {
            excerpt(pruneLength: 250)
            frontmatter {
              title
              date
              path
            }
          }
        }
      }
    }
  `)
  const postExcerpts: PostExcerpt[] = data.allMdx.edges.map(e => ({
    html: e.node.excerpt,
    path: e.node.frontmatter.path,
    title: e.node.frontmatter.title,
    keywords: e.node.frontmatter.keywords,
  }))
  return (
    <>
      <SEO title="Blog" />
      <div>
        <PengwinBlogHero />
        <CopyContainer>
          {postExcerpts.map((excerpt, i) => (
            <>
              <div style={{ paddingBottom: "24px" }} key={`post-excerpt-${i}`}>
                <div style={{ display: "flex", margin: "2em 0 2em 0" }}>
                  <PostHeading>
                    <h2 style={{ color: "#fff", margin: "0.5em 1.5em 0.5em 1.5em" }}>
                      {excerpt.title}
                    </h2>
                  </PostHeading>
                </div>
                <div dangerouslySetInnerHTML={{ __html: excerpt.html }} />
                <Link to={excerpt.path}>Continue Reading...</Link>
              </div>
              <hr
                style={{
                  width: "100%",
                  height: "3px",
                  borderRadius: "1.5px",
                  background: "#333",
                  opacity: 0.3,
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "5em",
                }}
              />
            </>
          ))}
        </CopyContainer>
      </div>
    </>
  )
}

export default Blog
