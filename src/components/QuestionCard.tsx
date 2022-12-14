import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import SingleQuesCard from "./SingleQuesCard";

type Props = {};

const QuestionCardList = (props: Props) => {
  return (
    <div className={styles.questionCardsList}>
      <Link to="/question" style={{ textDecoration: "none", color: "inherit" }}>
        <SingleQuesCard />
      </Link>
      <SingleQuesCard />
      <SingleQuesCard />
      <SingleQuesCard />
    </div>
  );
};

export default QuestionCardList;
