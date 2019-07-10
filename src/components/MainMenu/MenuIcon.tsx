import React from "react"
import styled from "styled-components"
import posed from "react-pose"

interface PosedRectProps {
  closeWidth: number
  closeX: number
  closeY: number
  closeRotate: number
  hamburgerWidth: number
  x: string
  y: string
  width?: string
  height?: string
  pose: "menu-visible" | "menu-hidden"
  className?: string
}

const PosedRect = posed.rect({
  "menu-visible": {
    width: (props: PosedRectProps) => props.closeWidth,
    x: (props: PosedRectProps) => props.closeX,
    y: (props: PosedRectProps) => props.closeY,
    rotate: (props: PosedRectProps) => props.closeRotate,
    transition: {
      default: { ease: "easeIn", duration: 120 },
    },
  },
  "menu-hidden": {
    width: (props: PosedRectProps) => props.hamburgerWidth,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      default: { ease: "easeIn", duration: 120 },
    },
  },
})

const Rect: React.FC<PosedRectProps> = props => (
  <PosedRect {...props} x="4" height="2" fill="#363636" rx="1" />
)

const ButtonWrapper = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
`

const IconWrapper = styled.div`
  .line {
    transition: all 150ms ease-in;
    transform-origin: 50% 50%;
  }
`

const MenuIcon: React.FC<{
  menuVisible: boolean
  clickHandler: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined
  scale?: number
}> = ({ menuVisible, clickHandler, scale = 1 }) => {
  const linePose = menuVisible ? "menu-visible" : "menu-hidden"
  return (
    <ButtonWrapper onClick={clickHandler}>
      <IconWrapper>
        <svg id="icon" width={String(40 * scale)} height={String(40 * scale)} viewBox="0 0 40 40">
          <Rect
            closeWidth={51}
            hamburgerWidth={34}
            className={"line"}
            closeX={-14}
            closeY={2}
            closeRotate={45}
            x="4"
            y="10"
            height="2"
            pose={linePose}
          />
          <Rect
            closeWidth={0}
            hamburgerWidth={28}
            className={"line"}
            closeX={20}
            closeY={0}
            closeRotate={0}
            x="4"
            y="21"
            width="28"
            height="2"
            pose={linePose}
          />
          <Rect
            closeWidth={51}
            hamburgerWidth={34}
            className={"line"}
            closeX={-18}
            closeY={-2}
            closeRotate={-45}
            x="4"
            y="34"
            height="2"
            pose={linePose}
          />
        </svg>
      </IconWrapper>
    </ButtonWrapper>
  )
}

export default MenuIcon
