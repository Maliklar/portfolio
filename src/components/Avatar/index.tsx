import Image from "next/image";
import ProfileAvatar from "@/assets/images/empty_profile_avatar.jpg";
import styles from "./index.module.scss";
type Props = {
  src?: string;
  alt: string;
  size?: number;
  shadow?: boolean;
  outlined?: boolean;
  className?: string;
};
const Avatar = ({ src, alt, outlined, shadow, size, className }: Props) => {
  return (
    <div
      role="img"
      style={{
        minHeight: size,
        height: size,
        width: size,
        minWidth: size,
      }}
      className={`${styles.container} ${className}`}
      title={alt}
      data-outlined={outlined}
      data-shadow={shadow}
    >
      <Image
        src={src || ProfileAvatar.src}
        fill
        alt={alt}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Avatar;
