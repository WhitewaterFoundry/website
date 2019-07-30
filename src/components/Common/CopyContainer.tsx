import React from "react"
import styled from "styled-components"

const CopyContainerWrapper = styled.div`
  padding: 3em;
  width: 100%;
  justify-content: center;
`

const CopyContainer: React.FC = ({ children }) => {
  return (
    <div style={{ maxWidth: "1200px", marginLeft: "auto", marginRight: "auto" }}>
      <CopyContainerWrapper>{children}</CopyContainerWrapper>
    </div>
  )
}

export default CopyContainer
