import { quizListType } from "../assets/typesContainer";
import styles from "../styles/Question.module.css";
interface Props {
  quiz: quizListType[];
  answerHandler: (e: any, quesId: any, optionId: any) => void;
}

const Question = ({ quiz, answerHandler }: Props) => {
  // console.log(quiz)
  return (
    <>
      {quiz.map((item, quesIndex) => (
        <div key={quesIndex} className={styles.question}>
          <div className={styles.question__title}>
            <h2>
              <span>#{quesIndex + 1} </span>
              {item.title}
            </h2>
            <p>Question can have multiple answers</p>
          </div>
          <div className={styles.question__options}>
            {item.options.map((option, optionIndex) => (
              <Option
                key={optionIndex}
                text={option.title}
                className={styles.question__singleOption}
                value={optionIndex}
                checked={option.checked}
                onChange={e=> answerHandler(e, quesIndex, optionIndex)}
              />
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
  text: string;
  className: string;
  value: number;
  checked: boolean;
  onChange: (e, quesId, optionId) => void
}
const Option = ({ className, text, ...rest }: any) => {
  return (
    <>
      <label className={className}>
        <input type="checkbox" {...rest} />
        <span>{text}</span>
      </label>
    </>
  );
};
