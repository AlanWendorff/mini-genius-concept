import styles from "./Layout.module.scss";

interface props {
  children: JSX.Element;
}

const Layout = ({ children }: props) => (
  <main className={styles.container}>{children}</main>
);

export default Layout;
