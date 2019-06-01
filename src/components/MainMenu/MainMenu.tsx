import * as React from "react"
import styled from "styled-components"
import MenuItem from "./MenuItem"
import MenuLink from "./MenuLink"
import MenuWrapper from "./MenuWrapper"

const MenuLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`
interface Props {
  menuItems: Array<MenuItem>
  renderIcon: Function
}
const MainMenu: React.FC<Props> = ({ menuItems, renderIcon }) => {
  return (
    <MenuWrapper>
      <div style={{ width: "70px" }}>{renderIcon()}</div>
      <MenuLinksWrapper>
        {menuItems.map((item: MenuItem) => {
          return (
            <MenuLink to={item.link} key={item.id}>
              {item.title}
            </MenuLink>
          )
        })}
      </MenuLinksWrapper>
    </MenuWrapper>
  )
}

export default MainMenu
