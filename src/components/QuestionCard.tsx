import { Link } from "react-router-dom";
import { useQuizValue } from "../context/store";
import styles from "../styles/Home.module.css";
import SingleQuesCard from "./SingleQuesCard";

export interface Quiz {
  id: number;
  image: string;
  title: string;
  questionList: QuestionPropsTypes[];
}

export interface QuestionPropsTypes {
  questionId: number;
  questionTitle: string;
  options: string[];
  answers: string[];
}
interface Props {
  props: Quiz[];
}

const QuestionCardList = ({ props }: Props) => {
  const [{ quiz }, dispatch] = useQuizValue();
  // console.log("Here are the quiz>>", quiz);
  return (
    <div className={styles.questionCardsList}>
      {props.map((quiz) => {
        const goToQuiz = () => {
          dispatch({
            type: "GO_TO_QUIZ_QUESTION",
            item: { ...quiz },
          });
        };
        return (
          <Link
            to="/question"
            style={{ textDecoration: "none", color: "inherit" }}
            key={quiz.id}
            onClick={goToQuiz}
          >
            <SingleQuesCard props={quiz} />
          </Link>
        );
      })}
    </div>
  );
};

export default QuestionCardList;
