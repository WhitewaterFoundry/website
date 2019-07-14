import React, { FormEvent, forwardRef, CSSProperties } from "react"
import styled from "styled-components"

const Input = styled.input`
  border: none;
  border-radius: 3px;
  background-color: #f8e8ff;
  margin-left: 8px;
  height: 2em;
`

const TextArea = styled.textarea`
  border: none;
  border-radius: 3px;
  background-color: #f8e8ff;
  margin-left: 8px;
  margin-top: 0;
`

const InputWrapper = styled.div`
  margin-top: 0.8em;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
`

const SubmitButton = styled.button`
  border: none;
  border-radius: 4px;
  background: linear-gradient(256.8deg, #9755b7 -8.63%, #5c2d72 105.85%);
  margin-top: 1em;
  margin-left: 8px;
  font-size: 1.2em;
  color: #fefbff;
  padding: 8px 24px 8px 24px;
  cursor: pointer;
`

interface ContactFormProps {
  headingText: string
  onSubmit: (event: FormEvent) => void
  action?: string
  containerId?: string
  style?: CSSProperties
}

const ContactForm = forwardRef<HTMLDivElement, ContactFormProps>(
  ({ headingText, action, onSubmit, containerId, style }, ref) => {
    return (
      <div
        id={containerId}
        ref={ref}
        style={{
          padding: ".5em 1em 1em 1em",
          background: "linear-gradient(103.37deg, #212121 4.29%, rgba(33, 33, 33, 0.89) 107.97%)",
          color: "#fefbff",
          maxWidth: "900px",
          borderRadius: "4px",
          ...style,
        }}
      >
        <h1 style={{ textAlign: "center", marginTop: "1em" }}>{headingText}</h1>
        <form action={action} onSubmit={onSubmit} method="POST" style={{ margin: "1em" }}>
          <InputWrapper>
            <label htmlFor="name">Name</label>
            <Input type="text" id="name" required={true} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="email">Email</label>
            <Input type="email" id="email" required={true} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="title">Title</label>
            <Input type="text" id="title" required={true} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="organization">Organization</label>
            <Input type="text" id="organization" required={true} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="phone">Phone Number</label>
            <Input type="tel" id="phone" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="numSeats">Estimated Number of Seats</label>
            <Input type="number" id="numSeats" />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="interestedIn">I am interested in...</label>
            <TextArea id="interestedIn" rows={3} />
          </InputWrapper>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5em" }}>
            <SubmitButton type="submit">Submit</SubmitButton>
          </div>
        </form>
      </div>
    )
  }
)

export default ContactForm
