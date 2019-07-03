import React, { useContext, CSSProperties } from "react"
import styled from "styled-components"
import { MediaContext } from "../MediaContext"

const EnterpriseFeatureWrapper = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: space-evenly;
  align-items: center;
  margin-top: 12em;
`

const EnterpriseTextContainer = styled.div<{
  position: "left" | "right"
  width: string
  mobile: boolean
}>`
  background: linear-gradient(103.37deg, #212121 4.29%, rgba(33, 33, 33, 0.89) 107.97%);
  border-radius: ${({ position, mobile }) =>
    mobile ? "0" : position === "left" ? "4px 0 0 4px" : "0 4px 4px 0"};
  color: #fefbff;
  height: ${({ mobile }) => (mobile ? "250px" : "400px")};
  font-size: 1.2em;
  width: ${({ width }) => width};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1em;
`

const FeatureIllistrationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EnterpriseFeature: React.FC<{
  position: "left" | "right"
  renderIllistration: Function
  style?: CSSProperties
}> = ({ children, renderIllistration, position, style }) => {
  const { media } = useContext(MediaContext)
  const mobile = media === "mobile" || media === "small"
  const rowDirection = position === "left" ? "row" : "row-reverse"
  return (
    <EnterpriseFeatureWrapper
      style={style === undefined ? style : {}}
      direction={mobile ? "column-reverse" : rowDirection}
    >
      <FeatureIllistrationContainer>{renderIllistration()}</FeatureIllistrationContainer>
      <EnterpriseTextContainer width={"100%"} position={position} mobile={mobile}>
        {children}
      </EnterpriseTextContainer>
    </EnterpriseFeatureWrapper>
  )
}

export default EnterpriseFeature
