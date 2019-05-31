import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import MenuItem from "./MenuItem"

const MainMenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 70px auto;
  padding-right: 24px;
`

const MenuLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 100%;
`

const MainMenuLink = styled(Link)`
  text-decoration: none;
  margin-left: 6px;
  margin-right: 6px;
`
interface Props {
  menuItems: Array<MenuItem>
  renderIcon: Function
}
const MainMenu: React.FC<Props> = ({ menuItems, renderIcon }) => {
  return (
    <MainMenuWrapper>
      <div style={{ width: "70px" }}>{renderIcon()}</div>
      <MenuLinksWrapper>
        {menuItems.map((item, i) => {
          return (
            <MainMenuLink to={item.link} key={`main-menu-item${i}`}>
              {item.title}
            </MainMenuLink>
          )
        })}
      </MenuLinksWrapper>
    </MainMenuWrapper>
  )
}

export default MainMenu
