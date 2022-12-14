import styles from "../styles/Question.module.css";

type Props = {};

const Qusetion = (props: Props) => {
  return (
    <div className={styles.question}>
      <div className={styles.question__title}>
        <h2>How to declare JavaScript variables?</h2>
        <p>Question can have multiple answers</p>
      </div>
      <div className={styles.question__options}>
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
        <Option />
      </div>
      <div className={styles.progressBar}>
        <div className={styles.backButton}>
          {/* <span className={styles.material-icons-outlined}> arrow_back </span> */}
        </div>
        <div className={styles.rangeArea}>
          <div className={styles.tooltip}>24% Complete!</div>
          <div className={styles.rangeBody}>
            <div className={styles.progress} style={{ width: "50%" }}></div>
          </div>
        </div>
        <a href="result.html">
          <button className={styles.button}>
            <span>Next Question</span>
            {/* <span className={styles.material-icons-outlined}> arrow_forward </span> */}
          </button>
        </a>
      </div>
    </div>
  );
};

export default Qusetion;

const Option = (props: Props) => {
  return (
    <div className={styles.question__singleOption}>
      <label>
        <input type="checkbox" name="fruit[]" value="grapes" />
        <span>with var</span>
      </label>
    </div>
  );
};
