import Question from "../components/Question";
import { useLocation } from "react-router-dom";
import { useQuizValue } from "../context/store";
interface Props {
  quiz: any;
}

const ResultPage = () => {
  const {state} = useLocation()
  console.log(state)
  const [{ quiz }, dispatch] = useQuizValue();
  return (
    <div>
      <h1>Hello from Result Page</h1>
      {/* <div></div>
      <h1>Question Analysis</h1>
      <div>
        <>
          <p>{quiz[0].title}</p>
          <Question quiz={quiz[0]} />
        </>
      </div> */}
    </div>
  );
};

export default ResultPage;
