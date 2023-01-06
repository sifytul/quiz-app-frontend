import _ from "lodash";
import { ChangeEvent, useEffect, useReducer, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { quiz } from "../assets/data";
import Question from "../components/Question";
import styles from "../styles/Question.module.css";

const initialState = { quiz: null, answerCount: {} };
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.payload.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return { ...state, quiz: action.payload };

    case "answers":
      const clonedQuestions = _.cloneDeep(state.quiz);
      clonedQuestions[action.questionId].options[action.optionId].checked =
        action.payload;
      const newAnsCount = _.cloneDeep(state.answerCount);
      if (action.questionId in newAnsCount && action.payload === true) {
        newAnsCount[action.questionId] += 1;
      } else if (action.questionId in newAnsCount && action.payload === false) {
        newAnsCount[action.questionId] -= 1;
      } else {
        newAnsCount[action.questionId] = 1;
      }
      return { ...state, quiz: clonedQuestions, answerCount: newAnsCount };

    default:
      return state;
  }
};

const Questions = () => {
  const { youtubeid } = useParams();
  if (youtubeid) {
    const [singleQuizList, setSingleQuizList] = useState(
      quiz[youtubeid].questions
    );
    const { state } = useLocation();
    const { topicTitle, noq } = state;
    const [loading, setLoading] = useState(true);

    const [qna, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      dispatch({
        type: "questions",
        payload: singleQuizList,
      });
      setLoading(false);
    }, [singleQuizList]);

    const answerHandler = (
      e: ChangeEvent<HTMLInputElement>,
      quesId: number,
      optionId: number
    ) => {
      dispatch({
        type: "answers",
        questionId: quesId,
        optionId: optionId,
        payload: e.target.checked,
      });
    };
    const answeredArr = Object.values(qna.answerCount);
    const Answered = !answeredArr.includes(0);
    const allAnswered = answeredArr.length === noq && Answered;
    return (
      <>
        {loading && <div>Loading...</div>}
        {!loading && qna.quiz && qna.quiz.length > 0 && (
          <>
            <h2 className={styles.topic__title}>{topicTitle}</h2>

            {qna.quiz.map((item, quesIndex) => (
              <Question quiz={item} answerHandler={answerHandler} quesIndex={quesIndex}/>
            ))}

            <div className={styles.submit__btn}>
              <Link
                to={{ pathname: `/result/${youtubeid}` }}
                state={{ userSubmission: qna.quiz }}
              >
                <button disabled={!allAnswered}>Submit</button>
              </Link>
            </div>
          </>
        )}
      </>
    );
  }
};

export default Questions;
