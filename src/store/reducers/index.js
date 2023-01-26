import { combineReducers } from 'redux';
import userReducer from './userReducer';
import chatReducer from './chatReducer';
import quizReducer from './quizReducer';

const rootReducer = combineReducers({
    userState: userReducer,
    chatState: chatReducer,
    quizState: quizReducer,
});

export default rootReducer;
