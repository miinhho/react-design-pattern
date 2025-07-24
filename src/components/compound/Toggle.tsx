/* eslint-disable react-hooks/rules-of-hooks */
import { css } from "@emotion/react"
import { useState } from "react"
import { ToggleContext } from "./ToggleContext"
import { useToggle } from "./useToggle"

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  gap: 12px;
`

const Toggle = ({ children }: React.PropsWithChildren) => {
  const [on, setOn] = useState(false)
  const toggle = () => setOn(!on)

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      <div css={containerStyles}>
        {children}
      </div>
    </ToggleContext.Provider>
  )
}

Toggle.On = ({ children }: React.PropsWithChildren) => {
  const { on } = useToggle()
  return on ? children : null
}

Toggle.Off = ({ children }: React.PropsWithChildren) => {
  const { on } = useToggle()
  return on ? null : children
}

Toggle.Button = () => {
  const { toggle } = useToggle()
  return <button onClick={toggle} css={{
    backgroundColor: "black",
    color: "white",
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  }}>Toggle</button>
}

export default Toggle