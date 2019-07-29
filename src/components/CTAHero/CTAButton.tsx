import styled from "styled-components"

const EnterpriseCTAButton = styled.button<{ fontSize: string }>`
  background: linear-gradient(256.8deg, #9755b7 -8.63%, #5c2d72 105.85%);
  border-radius: 2px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: none;
  min-width: 300px;
  height: 82px;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ fontSize }: { fontSize: string }) => fontSize};
  line-height: 41px;
  display: flex;
  color: #fefbff;
`

export default EnterpriseCTAButton
