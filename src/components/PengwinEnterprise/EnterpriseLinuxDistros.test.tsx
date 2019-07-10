///<reference path="../../../typings/ImageQueryEdge.d.ts" />
import * as React from "react"
import { render, cleanup } from "@testing-library/react"
import "jest-dom/extend-expect"
import EnterpriseLinuxDistros from "./EnterpriseLinuxDistros"
import "@testing-library/react/cleanup-after-each"

jest.mock("./useEnterpriseLinuxImages", () =>
  jest.fn(
    (): { id: string; fluid: Fluid }[] => [
      {
        id: "test-image-1",
        fluid: { src: "test-src1", srcSet: "test-src-set1", aspectRatio: 1, sizes: "test-sizes" },
      },
      {
        id: "test-image-2",
        fluid: { src: "test-src2", srcSet: "test-src-set2", aspectRatio: 1, sizes: "test-sizes" },
      },
      {
        id: "test-image-3",
        fluid: { src: "test-src3", srcSet: "test-src-set3", aspectRatio: 1, sizes: "test-sizes" },
      },
    ]
  )
)

import useEnterpriseLinuxImages from "./useEnterpriseLinuxImages"

afterEach(() => {
  cleanup()
  jest.clearAllMocks()
})

const renderEnterpriseLinuxDistros = (mobile = false, maxImageWidth = "200px") =>
  render(<EnterpriseLinuxDistros maxImageWidth={maxImageWidth} mobile={mobile} />)

describe("<EnterpriseLinuxDistros />", () => {
  it("calls useEnterpriseLinuxImages hook once with mobile=false", () => {
    const {} = renderEnterpriseLinuxDistros()
    expect(useEnterpriseLinuxImages).toBeCalledTimes(1)
  })

  it("calls useEnterpriseLinuxImages hook once with mobile=true", () => {
    const {} = renderEnterpriseLinuxDistros(true)
    expect(useEnterpriseLinuxImages).toBeCalledTimes(1)
  })

  it("Renders all icons returned from the useRunsIcons hook with mobile=false", () => {
    const { getAllByTestId } = renderEnterpriseLinuxDistros()

    const images = getAllByTestId(/test-image-\d/)
    images.forEach((image, i) => {
      expect(image.getAttribute("srcSet")).toBe(`test-src-set${i + 1}`)
    })
  })

  it("Renders all icons returned from the useRunsIcons hook with mobile=true", () => {
    const { getAllByTestId } = renderEnterpriseLinuxDistros(true)

    const images = getAllByTestId(/test-image-\d/)
    images.forEach((image, i) => {
      expect(image.getAttribute("srcSet")).toBe(`test-src-set${i + 1}`)
    })
  })
})
