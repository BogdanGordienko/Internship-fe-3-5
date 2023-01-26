import React from 'react';
import {
    QuizWrapper,
} from './styledComponents';
import Quiz from './components/quiz';
import Chat from './components/chat';

const Main = () => {
    return (
        <QuizWrapper>
            <Quiz/>
            <Chat/>
        </QuizWrapper>
    )
};

export default Main;
