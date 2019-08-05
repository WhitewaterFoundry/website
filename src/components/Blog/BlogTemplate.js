import React from "react"
//@ts-ignore
import { MDXRenderer } from "gatsby-plugin-mdx"
import CopyContainer from "../Common/CopyContainer"
import BlogHeading from "./BlogHeading"

const BlogPostTemplate = ({ pageContext: { title, author, date, body } }) => {
  return (
    <>
      <CopyContainer>
        <BlogHeading style={{ marginBottom: "3em", padding: "1em 2em 1em 2em" }}>
          <h1 style={{ color: "#fff" }}>{title}</h1>
          <h6 style={{ margin: 0, color: "#fff" }}>
            {author}, {date}
          </h6>
        </BlogHeading>

        <MDXRenderer>{body}</MDXRenderer>
      </CopyContainer>
    </>
  )
}

export default BlogPostTemplate
