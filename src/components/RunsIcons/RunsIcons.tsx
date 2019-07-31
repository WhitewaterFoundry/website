import React, { useContext } from "react"
import styled from "styled-components"
import { useRunsIcons } from "./useRunsIcons"
import { MediaContext } from "../MediaContext"

const IconsWrapper = styled.div<{ mobile: boolean }>`
  width: ${({ mobile }) => (mobile ? "80vw" : "44vw")};
  padding-top: 1em;
  min-width: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 48vh;
`

const IconWrapper = styled.div`
  max-width: 3.5em;
  max-height: 3em;
  min-height: 30px;

  margin: 8px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RunsIcons: React.FC = () => {
  const { media } = useContext(MediaContext)
  const mobile = media === "mobile" || media === "small"
  return (
    <div>
      <h4>Pengwin Runs:</h4>
      <IconsWrapper mobile={mobile}>
        {useRunsIcons().map((icon: any) => (
          <IconWrapper key={icon.id}>
            <img
              srcSet={icon.srcSet}
              data-testid="icon-image"
              style={{ mixBlendMode: "multiply" }}
            />
          </IconWrapper>
        ))}
      </IconsWrapper>
    </div>
  )
}

export default RunsIcons
