export const getQuestionsList = state => state.quizState.questionsList;
export const getQuestionsDocId = state => state.quizState.questionsDocId;
export const getIsReadyForGame = state => state.quizState.isUserReadyToStartQuiz;
export const getUserReadinessDocId = state => state.quizState.currentUserReadiness[0].userReadinessDocId;
export const getCorrectAnswersCount = state => state.quizState.correctAnswersCount;
export const getCorrectAnswersCountDocId = state => state.quizState.correctAnswersCountDocId;