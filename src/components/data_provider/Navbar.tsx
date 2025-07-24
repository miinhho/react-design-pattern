import { css } from "@emotion/react";
import { useTheme } from "./useTheme";

const containerStyles = css`
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 10px;
`

const buttonStyles = css`
  margin-left: 10px;
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
        background-color: ${theme === "dark" ? "#333" : "#f0f0f0"};
      `}
      >
        <h1 css={css`
          color: ${theme === "dark" ? "#fff" : "#000"};
        `}>
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