import React from "react"
import { useMicrosoftImage } from "./useMicrosoftImage"
import Img from "gatsby-image"

const MicrosoftStoreLink: React.FC = () => {
  return (
    <a href="//www.microsoft.com/store/apps/9nv1gv1pxz6p?cid=storebadge&ocid=badge">
      <Img fluid={useMicrosoftImage()} alt="English badge" style={{ zIndex: "-1" }} />
    </a>
  )
}

export default MicrosoftStoreLink
