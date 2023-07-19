import { motion, AnimatePresence } from "framer-motion";
import styles from "./BackBtn.module.scss";

interface props {
  show: boolean;
  handleMenu: () => void;
}

const BackBtn = ({ show, handleMenu }: props) => (
  <AnimatePresence>
    {show && (
      <motion.button
        initial={{ rotateX: 80 }}
        animate={{ rotateX: 0 }}
        onClick={handleMenu}
        className={styles.button}
      >
        back
      </motion.button>
    )}
  </AnimatePresence>
);

export default BackBtn;
