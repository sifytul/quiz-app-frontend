import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { quiz } from "../assets/data";
import Question from "../components/Question";
import styles from "../styles/Question.module.css";

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.payload.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.payload;

    case "answers":
      const clonedQuestions = _.cloneDeep(state);
      clonedQuestions[action.questionId].options[action.optionId].checked =
        action.payload;
      return clonedQuestions;
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
    const { videoTitle } = state;
    const [loading, setLoading] = useState(true);

    const [qna, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
      dispatch({
        type: "questions",
        payload: singleQuizList,
      });
      setLoading(false);
    }, [singleQuizList]);
    console.log(qna);

    const answerHandler = (e, quesId, optionId) => {
      dispatch({
        type: "answers",
        questionId: quesId,
        optionId: optionId,
        payload: e.target.checked,
      });
    };

    return (
      <>
        {loading && <div>Loading...</div>}
        {!loading && qna && qna.length > 0 && (
          <>
            <p>{videoTitle}</p>
            <Question quiz={qna} answerHandler={answerHandler} />
            <div className={styles.submit__btn}>
              <Link to="/result" state={{ userSubmission: qna }}>
                <button>Submit</button>
              </Link>
            </div>
          </>
        )}
      </>
    );
  }
};

export default Questions;
