import styles from "../styles/Home.module.css"
type Props = {};

const SingleQuesCard = (props: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img
          src="https://thumbs.dreamstime.com/b/ready-quiz-written-notebook-marker-pen-glasses-wooden-desk-business-concept-ready-quiz-118902066.jpg"
          alt="quiz_banner"
        />
      </div>
      <p className={styles.card__title}>
        <span>#1</span>What is React and How it works - React Tutorial Bangla
        Series
      </p>
      <div className={styles.card__footer}>
        <p>4 Questions</p>
        <p>Total points: 20</p>
      </div>
    </div>
  );
};

export default SingleQuesCard;
