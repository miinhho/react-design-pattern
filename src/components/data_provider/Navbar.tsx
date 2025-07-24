import { css } from "@emotion/react";
import { useTheme } from "./useTheme";

const containerStyles = css`
  display: flex;
  justifyItems: center;
  alignItems: center;
  padding: 10px;
`

const buttonStyles = css`
  marginLeft: 10px;
`

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <div css={css`
        ${containerStyles}
        backgroundColor: ${theme === "dark" ? "#333" : "#f0f0f0"};
      `}
      >
        <h1 css={{
          color: theme === "dark" ? "#fff" : "#000"
        }}>
          Hello Navbar
        </h1>
      </div>
      <button onClick={handleThemeToggle} css={buttonStyles}>
        Toggle Theme
      </button>
    </>
  )
}

export default Navbar