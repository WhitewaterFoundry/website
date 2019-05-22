import React from "react"

const BlogPostTemplate = ({ pageContext: { title, author, date, html } }) => {
  console.log(title)
  return (
    <>
      <h1>{title}</h1>
      <h6>
        Author: {author}, Posted On: {date}
      </h6>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}

export default BlogPostTemplate
