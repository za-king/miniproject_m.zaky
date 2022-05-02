import { createContext, useState } from "react";
import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

const GetQuestions = gql`
  query MyQuery {
    miniproject_questions {
      questionText
      id
      answerOptions {
        answerText
        id
        isCorrect
      }
    }
  }
`;

const GetQuizName = gql`
query MyQuery {
  miniproject_quizName {
    name
    questionsId {
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

const QuizContext = createContext();

export function QuizContextProvider({ children }) {
  const { data, loading, error } = useQuery(GetQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState(0);
  const handleCurrentQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };
  const handleResult = (e) => {
    if (e === true) {
      setResult(result + 1);
    } else {
      setResult(result);
    }
  };

  
  const value = {
    data,
    loading,
    currentQuestion,
    handleCurrentQuestion,
    handleResult,
    result,
  };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export default QuizContext;
