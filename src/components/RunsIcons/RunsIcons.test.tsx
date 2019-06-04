import * as React from "react"
import { render, cleanup } from "react-testing-library"
import "jest-dom/extend-expect"
import RunsIcons from "./RunsIcons"
import "react-testing-library/cleanup-after-each"

jest.mock("./useRunsIcons", () => ({
  useRunsIcons: jest.fn(() => [
    {
      id: "test1",
      srcSet: "/test-src1",
    },
    {
      id: "test2",
      srcSet: "/test-src2",
    },
    {
      id: "test3",
      srcSet: "/test-src3",
    },
  ]),
}))

import { useRunsIcons } from "./useRunsIcons"

afterEach(cleanup)

describe("<RunsIcons />", () => {
  it("calls useRunsIcons hook once", () => {
    const {} = render(<RunsIcons />)
    expect(useRunsIcons).toBeCalledTimes(1)
  })

  it("Renders all icons returned from the useRunsIcons hook", () => {
    const { getAllByTestId } = render(<RunsIcons />)

    const images = getAllByTestId("icon-image")
    images.forEach((image, i) => {
      expect(image.getAttribute("srcSet")).toBe(`/test-src${i + 1}`)
    })
  })
})
