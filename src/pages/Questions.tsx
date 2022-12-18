import { QuestionPropsTypes } from "../components/QuestionCard";
import Question from "../components/Question";
import { useQuizValue } from "../context/store";
import {useEffect} from 'react'

interface Props {
  quiz: QuestionPropsTypes;
}

const Questions = () => {

  const [{quiz}, dispatch] = useQuizValue()
  // useEffect(()=> {

  // },[quiz])
  // console.log(quiz[0])
  return (
    <>
    <p>{quiz[0].title}</p>
    <Question quiz={quiz[0]}/>
    </>
  );
};

export default Questions;
