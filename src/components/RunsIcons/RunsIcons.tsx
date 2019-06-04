import React from "react"
import styled from "styled-components"
import { useRunsIcons } from "./useRunsIcons"

const IconsWrapper = styled.div`
  width: 40vw;
  min-width: 380px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const IconWrapper = styled.div`
  max-width: 50px;
  max-height: 40px;
  margin: 8px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RunsIcons: React.FC = () => {
  return (
    <div>
      <h4>Pengwin Runs:</h4>
      <IconsWrapper>
        {useRunsIcons().map((icon: any) => (
          <IconWrapper key={icon.id}>
            <img srcSet={icon.srcSet} data-testid="icon-image" />
          </IconWrapper>
        ))}
      </IconsWrapper>
    </div>
  )
}

export default RunsIcons
