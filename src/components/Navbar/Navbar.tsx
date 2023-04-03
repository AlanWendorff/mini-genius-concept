import { Link } from "react-router-dom";
import { FUNCTIONAL_PARADIGM, OBJECT_PARADIGM } from "../../routes";
import styles from "./Navbar.module.scss";

const Navbar = () => (
  <div className={styles.container}>
    <Link to={FUNCTIONAL_PARADIGM}>FUNCTIONAL PARADIGM</Link>
    <Link to={OBJECT_PARADIGM}>OBJECT PARADIGM</Link>
  </div>
);
export default Navbar;
