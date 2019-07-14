import * as React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import "jest-dom/extend-expect"
import ContactForm from "./ContactForm"
import "@testing-library/react/cleanup-after-each"

afterEach(() => {
  cleanup()
  jest.clearAllMocks()
})

const submitFormSpy = jest.fn()

const renderContactForm = () =>
  render(<ContactForm headingText="Test Heading Text" onSubmit={submitFormSpy} />)

describe("<EnterpriseLinuxDistros />", () => {
  it("Has a Name label with an input type=text as it's child", () => {
    const { getByLabelText } = renderContactForm()
    const nameField = getByLabelText("Name")
    expect(nameField.getAttribute("type")).toBe("text")
  })

  it("Has a Title label with an input type=text as it's child", () => {
    const { getByLabelText } = renderContactForm()
    const titleField = getByLabelText("Title")
    expect(titleField.getAttribute("type")).toBe("text")
  })

  it("Has an Organization label with an input type=text as it's child", () => {
    const { getByLabelText } = renderContactForm()
    const orgField = getByLabelText("Organization")
    expect(orgField.getAttribute("type")).toBe("text")
  })

  it("Has an Email label with an input type=email as it's child", () => {
    const { getByLabelText } = renderContactForm()
    const emailField = getByLabelText("Email")
    expect(emailField.getAttribute("type")).toBe("email")
  })

  it("Has an 'Estimated Number of Seats' label with an input type=number as it's child", () => {
    const { getByLabelText } = renderContactForm()
    const seatsField = getByLabelText("Estimated Number of Seats")
    expect(seatsField.getAttribute("type")).toBe("number")
  })

  it("Has a 'Phone Number' label with an input type=tel as it's child", () => {
    const { getByLabelText } = renderContactForm()
    const phoneField = getByLabelText("Phone Number")
    expect(phoneField.getAttribute("type")).toBe("tel")
  })

  it("Has a submit button", () => {
    const { getByText } = renderContactForm()
    const submitButton = getByText("Submit")
    expect(submitButton.getAttribute("type")).toBe("submit")
  })

  it("Calls onSubmit functional prop once when form submitted", () => {
    const { getByText, getByLabelText } = renderContactForm()

    getByLabelText("Name").innerText = "Kevin Brock"
    getByLabelText("Email").innerText = "kevin@kbrock84.com"
    getByLabelText("Title").innerText = "Some Dev"
    getByLabelText("Organization").innerText = "Whitewater Foundry"

    fireEvent.click(getByText(/submit/i).closest("button")!)
    expect(submitFormSpy).toBeCalledTimes(1)
  })
})
