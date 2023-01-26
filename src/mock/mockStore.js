const quizReducer = {
    answersList: [],
    questionsList: [],
    isShowResults: false,
    questionsDocId: '',
    currentQuestion: [],
    usersResultsList: [],
    correctAnswersCount: 0,
    currentUserReadiness: [],
    isUserReadyToStartQuiz: false,
    correctAnswersCountDocId: '',
    isAllUsersReadyToStartQuiz: false,
};

const userReducer = {
    userId: '',
    userDocId: '',
};

const chatReducer = {
    messages: [],
};

export default {
    userState: userReducer,
    chatState: chatReducer,
    quizState: quizReducer,
};
