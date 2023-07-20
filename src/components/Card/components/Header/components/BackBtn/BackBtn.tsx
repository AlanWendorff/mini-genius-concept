import { motion } from "framer-motion";
import styles from "./BackBtn.module.scss";

interface props {
  key: string;
  handleReturnMenu: () => void;
}

const BackBtn = ({ key, handleReturnMenu }: props) => (
  <motion.button
    key={key}
    initial={{ rotateX: 80 }}
    animate={{ rotateX: 0 }}
    onClick={handleReturnMenu}
    className={styles.button}
  >
    back
  </motion.button>
);

export default BackBtn;
