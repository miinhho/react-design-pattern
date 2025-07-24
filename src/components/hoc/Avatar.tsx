import styles from "./Avatar.module.css";

export interface AvatarProps {
  name: string;
  description: string;
}

const Avatar = ({ name, description }: AvatarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        {name}
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Avatar