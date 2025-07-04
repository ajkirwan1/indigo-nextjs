import Link from "next/link";
import styles from "./luxury-button.module.css";

export default function LuxuryButton({
  children,
  onClick,
  href,
  className = "",
}) {
  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a className={`${styles.button} ${className}`}>{children}</a>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  );
}
