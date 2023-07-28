import Divider from "@/components/Divider";
import styles from "./index.module.scss";
import { type IconType } from "react-icons";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  title: string;
  subTitle?: string;
  Icon?: IconType;
  Trailing?: IconType;
  divider?: boolean;
  href?: string;
};
const MenuItem = ({
  title,
  subTitle,
  Icon,
  Trailing,
  divider = false,
  href,
}: Props) => {
  const { push } = useRouter();
  const clickHandler = () => href && push(href).catch((e) => console.error(e));

  return (
    <li
      className={styles.container}
      title={`${title}${subTitle ? "\n" + subTitle : ""}`}
      onClick={href ? clickHandler : undefined}
    >
      {Icon && <Icon className={styles.icon} size={24} />}
      {divider && Icon && <Divider vertical />}
      {href ? (
        <Link className={styles.link} href={href}>
          <strong>{title}</strong>
          {subTitle && <small>{subTitle}</small>}
        </Link>
      ) : (
        <div>
          <strong>{title}</strong>
          {subTitle && <small>{subTitle}</small>}
        </div>
      )}
      {Trailing && <Trailing className={styles.trailing} size={10} />}
    </li>
  );
};
export default MenuItem;
