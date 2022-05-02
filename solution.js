mutation MyMutation2($questionText: String = "", $answerOptions: miniproject_answerOptions_arr_rel_insert_input = {data: {}}) {
    insert_miniproject_questions(objects: {questionText: $questionText, answerOptions: $answerOptions}) {
      returning {
        questionText
        answerOptions {
          answerText
          isCorrect
          questionId
        }
        id
      }
    }
  }

"{"questionText":  "zaky" ,"answerOptions": {"data":[{"answerText": "dsa" ,"isCorrect": true  },{"answerText":  "mandi" ,"isCorrect": false },{"answerText":  "mandi" ,"isCorrect": false },{"answerText":  "mandi" ,"isCorrect": false }]}}"



mutation MyMutation($object: miniproject_quizName_insert_input = {}) {
    insert_miniproject_quizName_one(object: $object) {
      name
      id
    }
  }


  {
    "object":{"name": "belajar memasak","questionsId": {"data": [{"questionText":  "zaky" ,"answerOptions": {"data":[{"answerText": "dsa" ,"isCorrect": true  },{"answerText":  "mandi" ,"isCorrect": false },{"answerText":  "mandi" ,"isCorrect": false },{"answerText":  "mandi" ,"isCorrect": false }]}},{"questionText":  "zaky" ,"answerOptions": {"data":[{"answerText": "dsa" ,"isCorrect": true  },{"answerText":  "mandi" ,"isCorrect": false },{"answerText":  "mandi" ,"isCorrect": false },{"answerText":  "mandi" ,"isCorrect": false }]}}] }}
  }