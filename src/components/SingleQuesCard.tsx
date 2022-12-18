import styles from "../styles/Home.module.css";
import { Quiz } from "./QuestionCard";
interface Props {
  props: Quiz;
}

const SingleQuesCard = ({ props }: Props) => {
  const { id, image, title, questionList } = props;
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={image} alt="quiz_banner" />
      </div>
      <p className={styles.card__title}>
        <span>#{id}. </span>
        {title}
      </p>
      <div className={styles.card__footer}>
        <p>{questionList.length} Questions</p>
        <p>Total points: {questionList.length * 5}</p>
      </div>
    </div>
  );
};

export default SingleQuesCard;
