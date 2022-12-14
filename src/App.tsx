import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import PageNotFound from "./pages/Page404";
import Question from "./pages/Qusetion";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="question" element={<Question />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
