import * as React from "react"
import { render, cleanup } from "react-testing-library"
import "jest-dom/extend-expect"
import MainMenu from "./MainMenu"
import MenuItem from "./MenuItem"
import "react-testing-library/cleanup-after-each"

const mockMenuItems: Array<MenuItem> = [
  { title: "Test 1", link: "/test1", id: "test1" },
  { title: "Test 2", link: "/test2", id: "test2" },
  { title: "Test 3", link: "/test3", id: "test3" },
  { title: "Test 4", link: "/test4", id: "test4" },
  { title: "Test 5", link: "/test5", id: "test5" },
]

const renderMainMenu: Function = (mobile: boolean) => {
  return render(
    <MainMenu menuItems={mockMenuItems} renderIcon={() => <div>Fake Icon</div>} mobile={mobile} />
  )
}

afterEach(cleanup)

describe("<MainMenu />", () => {
  it("Matches the previous accepted snapshot with mobile=false.", () => {
    const { asFragment } = renderMainMenu(false)
    expect(asFragment()).toMatchSnapshot()
  })

  it("Matches the previous accepted snapshot with mobile=true.", () => {
    const { asFragment } = renderMainMenu(true)
    expect(asFragment()).toMatchSnapshot()
  })

  it("Renders a link for each item passed to the menuItems prop in order with mobile=false.", () => {
    const { getAllByText } = renderMainMenu(false)

    let currentLinks = getAllByText(/^Test\s\d$/)

    mockMenuItems.forEach((item, i) => {
      expect(currentLinks[i].getAttribute("href")).toBe(item.link)
    })
  })

  it("Renders a link for each item passed to the menuItems prop in order with mobile=true.", () => {
    const { getAllByText } = renderMainMenu(true)

    let currentLinks = getAllByText(/^Test\s\d$/)

    mockMenuItems.forEach((item, i) => {
      expect(currentLinks[i].getAttribute("href")).toBe(item.link)
    })
  })

  it("Renders the element passed to the icon prop with mobile=false", () => {
    const { getByText } = renderMainMenu(false)
    const iconElement = getByText("Fake Icon")

    expect(iconElement).not.toBeUndefined()
  })

  it("Renders the element passed to the icon prop with mobile=true", () => {
    const { getByText } = renderMainMenu(true)
    const iconElement = getByText("Fake Icon")

    expect(iconElement).not.toBeUndefined()
  })
})
