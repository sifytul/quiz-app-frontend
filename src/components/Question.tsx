import styles from "../styles/Question.module.css";
import { QuestionPropsTypes } from "./QuestionCard";
interface Props {
  quiz: QuestionPropsTypes;
}

const Question = ({ quiz }: Props) => {
  return (
    <>
      {quiz?.questionList.map((item) => (
        <div key={item.questionId} className={styles.question}>
          <div className={styles.question__title}>
            <h2>
              <span>#{item.questionId} </span>
              {item.questionTitle}
            </h2>
            <p>Question can have multiple answers</p>
          </div>
          <div className={styles.question__options}>
            {item.options.map((option, index) => (
              <Option key={index} option={option} />
            ))}
          </div>

          {/* ProgressBar Component (optional) */}

          {/* <div className={styles.progressBar}>
        <div className={styles.backButton}></div>
        <div className={styles.rangeArea}>
          <div className={styles.tooltip}>24% Complete!</div>
          <div className={styles.rangeBody}>
          <div className={styles.progress} style={{ width: "50%" }}></div>
          </div>
        </div>
        <a href="result.html">
          <button className={styles.button}>
          <span>Next Question</span>
          </button>
        </a>
      </div> */}
        </div>
      ))}
    </>
  );
};

export default Question;

interface optionType {
  option: string;
}
const Option = ({ option }: optionType) => {
  return (
    <div className={styles.question__singleOption}>
      <label>
        <input type="checkbox" name="fruit[]" value="grapes" />
        <span>{option}</span>
      </label>
    </div>
  );
};
