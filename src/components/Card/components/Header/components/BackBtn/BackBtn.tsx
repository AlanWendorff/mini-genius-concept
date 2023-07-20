import { motion } from "framer-motion";
import styles from "./BackBtn.module.scss";
import useChangeContent from "@components/Card/useChangeContent";

const BackBtn = () => {
  const { handleReturnMenu } = useChangeContent();

  return (
    <motion.button
      initial={{ rotateX: 80 }}
      animate={{ rotateX: 0 }}
      onClick={handleReturnMenu}
      className={styles.button}
    >
      back
    </motion.button>
  );
};

export default BackBtn;
