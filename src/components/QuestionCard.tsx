import { Link } from "react-router-dom";
import { topicListType } from "../assets/typesContainer";
import styles from "../styles/Home.module.css";
import SingleQuesCard from "./SingleQuesCard";

interface PropsType {
  quizTopics: topicListType[];
}

const QuestionCardList = ({ quizTopics }: PropsType) => {
  return (
    <div className={styles.questionCardsList}>
      {quizTopics.map((topic) => {
        return (
          <Link
            to={{
              pathname: `/quiz/${topic.youtubeID}`,
            }}
            state={{ videoTitle: topic.title }}
            style={{ textDecoration: "none", color: "inherit" }}
            key={topic.id}
          >
            <SingleQuesCard topic={topic} />
          </Link>
        );
      })}
    </div>
  );
};

export default QuestionCardList;
