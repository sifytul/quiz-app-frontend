import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logoText}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <p>Quiz App</p>
        </Link>
      </div>
      <div className={styles.header__auth}>
        <Link to="/signup" style={{ textDecoration: "none", color: "inherit" }}>
          <div>Signup</div>
        </Link>
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          <div>Login</div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
