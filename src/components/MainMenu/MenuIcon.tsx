import React from "react"
import styled from "styled-components"

const Rect: React.FC<{
  className: string
  x: string
  y: string
  width: string
  height: string
}> = props => <rect {...props} x="4" height="2" fill="#363636" rx="1" />

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

  .line-end {
    width: 38px;
  }

  .line-x {
    transform: translateX(-14px) translateY(2px) rotate(45deg);
    width: 51px;
  }

  .line-y {
    transform: translateX(-18px) translateY(-2px) rotate(-45deg);
    width: 51px;
  }

  .line-z {
    width: 0;
    transform: translateX(20px);
  }
`

const MenuIcon: React.FC<{ menuVisible: boolean; clickHandler: any }> = ({
  menuVisible,
  clickHandler,
}) => {
  return (
    <ButtonWrapper onClick={clickHandler}>
      <IconWrapper>
        <svg id="icon" width="40" height="40">
          <Rect
            className={`line ${menuVisible ? "line-x" : ""}`}
            x="4"
            y="10"
            width="34"
            height="2"
          />
          <Rect
            className={`line ${menuVisible ? "line-z" : ""}`}
            x="4"
            y="21"
            width="28"
            height="2"
          />
          <Rect
            className={`line ${menuVisible ? "line-y" : ""}`}
            x="4"
            y="34"
            width="34"
            height="2"
          />
        </svg>
      </IconWrapper>
    </ButtonWrapper>
  )
}

export default MenuIcon
