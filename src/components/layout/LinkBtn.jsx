import styles from "./LinkBtn.module.css";
import { Link } from "react-router-dom";

function LinkBtn({to,text}) {
  return (
    <Link className={styles.btn} to={to}>{text}</Link>
  )
}

export default LinkBtn;
