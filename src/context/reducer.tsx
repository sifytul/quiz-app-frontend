import { QuizTypes } from "../components/QuestionCard";

export const initialState = {
  quiz: [],
};
interface AnyActionType {}

const reducer = (state: QuizTypes, action: any) => {
  switch (action.type) {
    case "GO_TO_QUIZ_QUESTION":
      return {
        quiz: [action.payload], // will replace the existing quiz data with new data
      };
    default:
      return state;
  }
};

export default reducer;
