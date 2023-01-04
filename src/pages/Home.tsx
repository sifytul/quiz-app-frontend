import { useState } from "react";
import QuestionCardList from "../components/QuestionCard";
import { topicListType } from "../assets/typesContainer";

interface Props {
  topicList: topicListType[];
}


const Home = ({topicList}: Props) => {
  

  return (
    <div>
      <QuestionCardList quizTopics={topicList} />
    </div>
  );
};

export default Home;
