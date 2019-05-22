import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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

const MainMenu = () => {
  return (
    <MainMenuWrapper>
      <div style={{ width: "70px" }}>{/* Icon Placeholder */}</div>
      <MenuLinksWrapper>
        <MainMenuLink to="/">Pengwin</MainMenuLink>
        <MainMenuLink to="/pengwin-enterprise">Pengwin Enterprise</MainMenuLink>
        <MainMenuLink to="/fedora-remix-for-wsl">Fedora Remix for WSL</MainMenuLink>
        <MainMenuLink to="/what-is-wsl">What is WSL?</MainMenuLink>
        <MainMenuLink to="/blog">Blog</MainMenuLink>
      </MenuLinksWrapper>
    </MainMenuWrapper>
  )
}

export default MainMenu
