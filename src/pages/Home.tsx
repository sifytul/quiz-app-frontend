import { Outlet } from "react-router-dom";
import Header from '../components/Header'
import QuestionCardList from '../components/QuestionCard'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      {/* <Header/> */}
      <QuestionCardList />
      {/* <Outlet /> */}
    </div>
  );
}

export default Home