import { Route, Routes } from "react-router-dom";
import { topicListType } from "../src/assets/typesContainer";
import "./App.css";
import { quiz, topic } from "./assets/data";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import PageNotFound from "./pages/Page404";
import Questions from "./pages/Questions";
import ResultPage from "./pages/ResultPage";
import SignUp from "./pages/SignUp";

let topicList: topicListType[] = Object.keys(topic).reduce((acc, curr) => {
  topic[curr].id = curr;
  acc.push(topic[curr]);
  return acc;
}, []);


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home topicList={topicList} />} />
          <Route path="quiz/:youtubeid" element={<Questions />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="result/:youtubeid" element={<ResultPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
