import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { Quiz } from "./components/QuestionCard";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import PageNotFound from "./pages/Page404";
import Questions from "./pages/Questions";
import SignUp from "./pages/SignUp";
const quizes: Quiz[] = [
  {
    id: 1,
    image: "https://reactjs.org/logo-og.png",
    title: "What is React and How it works - React Tutorial Bangla Series",
    questionList: [
      {
        questionId: 1,
        questionTitle: "How to declare JavaScript variables?",
        options: [
          "with var",
          "with let",
          "with const",
          "with def",
          "with class",
          "with only variable",
        ],
        answers: ["with var", "with let", "with const", "with only variable"],
      },
      {
        questionId: 2,
        questionTitle: "How to declare JavaScript variables?",
        options: [
          "with var",
          "with let",
          "with const",
          "with def",
          "with class",
          "with only variable",
        ],
        answers: ["with var", "with let", "with const", "with only variable"],
      },
      {
        questionId: 3,
        questionTitle: "How to declare JavaScript variables?",
        options: [
          "with var",
          "with let",
          "with const",
          "with def",
          "with class",
          "with only variable",
        ],
        answers: ["with var", "with let", "with const", "with only variable"],
      },
    ],
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages_800x.png?v=1619126283",
    title: "What is React and How it works - React Tutorial Bangla Series",
    questionList: [
      {
        questionId: 1,
        questionTitle: "How to declare JavaScript variables?",
        options: [
          "with var",
          "with let",
          "with const",
          "with def",
          "with class",
          "with only variable",
        ],
        answers: ["with var", "with let", "with const", "with only variable"],
      },
      {
        questionId: 2,
        questionTitle: "How to declare JavaScript variables?",
        options: [
          "with var",
          "with let",
          "with const",
          "with def",
          "with class",
          "with only variable",
        ],
        answers: ["with var", "with let", "with const", "with only variable"],
      },
      {
        questionId: 3,
        questionTitle: "How to declare JavaScript variables?",
        options: [
          "with var",
          "with let",
          "with const",
          "with def",
          "with class",
          "with only variable",
        ],
        answers: ["with var", "with let", "with const", "with only variable"],
      },
    ],
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages_800x.png?v=1619126283",
    title: "What is React and How it works - React Tutorial Bangla Series",
    questionList: [
      {
        questionId: 1,
        questionTitle:
          "What is the correct command to create a new React project?",
        options: [
          "npm create-react-app myReactApp",
          "npm create-react-app",
          "npx create-react-app myReactApp",
          "npx create-react-app",
        ],
        answers: ["npx create-react-app myReactApp"],
      },
      {
        questionId: 2,
        questionTitle:
          "What does myReactApp refer to in the following command? npx create-react-app myReactApp",
        options: [
          "The type of app to create",
          "The name you want to use for the new app",
          "The directory to create the new app in",
          "A reference to an existing app",
        ],
        answers: ["with var", "with let", "with const", "with only variable"],
      },
      {
        questionId: 3,
        questionTitle:
          "What command is used to start the React local development server?",
        options: [
          "npm build",
          "npm serve",
          "npm start",
          "npm run dev"
        ],
        answers: ["npm run dev"],
      },
    ],
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages_800x.png?v=1619126283",
    title: "What is React and How it works - React Tutorial Bangla Series",
    questionList: [
      {
        questionId: 1,
        questionTitle: "How to declare JavaScript variables?",
        options: [
          "with var",
          "with let",
          "with const",
          "with def",
          "with class",
          "with only variable",
        ],
        answers: ["with var", "with let", "with const", "with only variable"],
      },
      {
        questionId: 2,
        questionTitle: "How to declare JavaScript variables?",
        options: [
          "with var",
          "with let",
          "with const",
          "with def",
          "with class",
          "with only variable",
        ],
        answers: ["with var", "with let", "with const", "with only variable"],
      },
    ],
  },
];
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home quizes={quizes}/>} />
          <Route path="question" element={<Questions />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
