import { ChangeEvent } from "react";
import { quizListType } from "../assets/typesContainer";
import styles from "../styles/Question.module.css";

interface PropsType {
  quiz: quizListType;
  quesIndex?: number;
  answerHandler?: (e: any, quesId: any, optionId: any) => void;
}

const Question = ({ quiz, quesIndex, answerHandler }: PropsType) => {
  return (
    <>
      <div key={quesIndex} className={styles.question}>
        <div className={styles.question__title}>
          <h3>
            <span>#{quesIndex! + 1} </span>
            {quiz.title}
          </h3>
          <p style={{ fontSize: "small", color: "gray" }}>
            Question can have multiple answers
          </p>
        </div>
        <div className={styles.question__options}>
          {quiz.options.map((option, optionIndex) => 
          
          
          (
            <Option
              key={optionIndex}
              text={option.title}
              className={styles.question__singleOption}
              value={optionIndex}
              checked={option.checked}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                answerHandler?.(e, quesIndex, optionIndex)
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;

interface optionType {
  text: string;
  className: string;
  value: number;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>, quesId:number, optionId:number) => void;
}
export const Option = ({ className, text, ...rest }: any) => {
  return (
    <>
      <label className={className}>
        <input type="checkbox" {...rest} />
        <span>{text}</span>
      </label>
    </>
  );
};
