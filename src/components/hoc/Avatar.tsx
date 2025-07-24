import { css } from "@emotion/react";

export interface AvatarProps {
  name: string;
  description: string;
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

const nameStyles = css`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #4ECDC4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  color: white;
  text-transform: uppercase;
  border: 2px solid #e0e0e0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

const Avatar = ({ name, description }: AvatarProps) => {
  return (
    <div css={containerStyles}>
      <div css={nameStyles}>
        {name}
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Avatar