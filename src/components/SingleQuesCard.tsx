import styles from "../styles/Home.module.css";
import { topicListType } from "../assets/typesContainer";

interface QuizTypes {
  topic: topicListType
}

const SingleQuesCard = ({ topic }: QuizTypes) => {
  const { id, title, noq} = topic;
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="quiz_banner" />
      </div>
      <p className={styles.card__title}>
        <span>#{id}. </span>
        {title}
      </p>
      <div className={styles.card__footer}>
        <p>{noq} Questions</p>
        <p>Total points: {noq * 5}</p>
      </div>
    </div>
  );
};

export default SingleQuesCard;
