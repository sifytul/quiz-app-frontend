export const initialState = {
  quiz: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GO_TO_QUIZ_QUESTION":
      return {
        quiz: [action.item],
      };
    default:
      return state;
  }
};

export default reducer;
