import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import MenuItem from "./MenuItem"
import MenuLink from "./MenuLink"
import MenuWrapper from "./MenuWrapper"
import MenuIcon from "./MenuIcon"

const MenuLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`

const DropDown = styled.div<{ height: string; opacity: number }>`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  height: ${props => props.height};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  background-color: #ffffff;
  opacity: ${({ opacity }) => opacity};
  transition: height 200ms ease-out, opacity 300ms ease;
  a {
    font-size: 1.5em;
  }
`

interface Props {
  menuItems: Array<MenuItem>
  renderIcon: Function
  mobile: boolean
}

const MainMenu: React.FC<Props> = ({ menuItems, renderIcon, mobile }) => {
  const [menuDropped, setMenuDropped] = useState<boolean>(false)
  const renderLinks = () =>
    menuItems.map((item: MenuItem) => {
      return (
        <MenuLink to={item.link} key={item.id}>
          {item.title}
        </MenuLink>
      )
    })
  return (
    <>
      <MenuWrapper>
        {mobile ? (
          <>
            <div style={{ width: "70px" }}>{renderIcon()}</div>

            <div style={{ width: "100%", display: "flex", flexDirection: "row-reverse" }}>
              <MenuIcon
                clickHandler={() => setMenuDropped(!menuDropped)}
                menuVisible={menuDropped}
              />
            </div>
            <DropDown opacity={menuDropped ? 1 : 0} height={menuDropped ? "70vh" : "0px"}>
              {renderLinks()}
            </DropDown>
          </>
        ) : (
          <>
            <div style={{ width: "70px" }}>{renderIcon()}</div>
            <MenuLinksWrapper> {renderLinks()}</MenuLinksWrapper>
          </>
        )}
      </MenuWrapper>
    </>
  )
}

export default MainMenu
