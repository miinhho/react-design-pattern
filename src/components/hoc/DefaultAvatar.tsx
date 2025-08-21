import Avatar, { type AvatarProps } from './Avatar'

interface DefaultAvatarProps {
  name: string
}

const defaultAvatar = (Component: React.ComponentType<AvatarProps>) => {
  return ({ name }: DefaultAvatarProps) => (
    <Component description="Hello!" name={name} />
  )
}

const DefaultAvatar = defaultAvatar(Avatar)

export default DefaultAvatar
