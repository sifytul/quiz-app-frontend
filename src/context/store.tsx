import { createContext, useReducer, useContext} from 'react'

// prepare the data layer
export const QuizContext = createContext<any>();

// Wrap our app and provide the data layer
export const QuizProvider = ({reducer, initialState, children}) => (
    <QuizContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </QuizContext.Provider>
)

// Pull information from the data layer
export const useQuizValue = () => useContext(QuizContext)