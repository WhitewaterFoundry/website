import * as React from "react"
import { render, cleanup } from "react-testing-library"
import "jest-dom/extend-expect"
import MainMenu from "./MainMenu"
import MenuItem from "./MenuItem"
import "react-testing-library/cleanup-after-each"

const mockMenuItems: Array<MenuItem> = [
  { title: "Test 1", link: "/test1" },
  { title: "Test 2", link: "/test2" },
  { title: "Test 3", link: "/test3" },
  { title: "Test 4", link: "/test4" },
  { title: "Test 5", link: "/test5" },
]

const renderMainMenu: Function = () => {
  return render(<MainMenu menuItems={mockMenuItems} renderIcon={() => <div>Fake Icon</div>} />)
}

afterEach(cleanup)

describe("<MainMenu />", () => {
  it("Matches the previous accepted snapshot.", () => {
    const { asFragment } = renderMainMenu()
    expect(asFragment()).toMatchSnapshot()
  })

  it("Renders a link for each item passed to the menuItems prop in order.", () => {
    const { getAllByText } = renderMainMenu()

    let currentLinks = getAllByText(/^Test\s\d$/)

    mockMenuItems.forEach((item, i) => {
      expect(currentLinks[i].getAttribute("href")).toBe(item.link)
    })
  })

  it("Renders the element passed to the icon prop", () => {
    const { getByText } = renderMainMenu()
    const iconElement = getByText("Fake Icon")

    expect(iconElement).not.toBeUndefined()
  })
})
