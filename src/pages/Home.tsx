import { useState } from "react";
import QuestionCardList from "../components/QuestionCard";
import { Quiz } from "../components/QuestionCard";

interface Props{
  quizes: Quiz[]
}


const Home = ({quizes}: Props) => {
  

  const [questionList, setQuestionList] = useState<Quiz[]>([...quizes]);
  return (
    <div>
      <QuestionCardList props={questionList} />
    </div>
  );
};

export default Home;
