import { createContext, useState } from "react";
import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";



const GetQuizName = gql`
query MyQuery {
  miniproject_quizName {
    name
    id
    questionsId {
        id
      questionText
      quiznameId
      answerOptions {
        answerText
        id
        isCorrect
        questionId
      }
    }
  }
}

`

const QuizNameContext = createContext();

export function QuizNameContextProvider({ children }) {
  const { data, loading, error } = useQuery(GetQuizName);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultQuizUser, setResultQuizUser] = useState(0);
  const handleCurrentQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const handleResult = (e) => {
    if (e === true) {
      setResultQuizUser(resultQuizUser + 1);
    } else {
      setResultQuizUser(resultQuizUser);
    }
  };

  
  const value = {
    data,
    loading,
    currentQuestion,
    handleCurrentQuestion,
    handleResult,
    resultQuizUser,
    GetQuizName
  };
  return <QuizNameContext.Provider value={value}>{children}</QuizNameContext.Provider>;
}

export default QuizNameContext;
