import React, { useState, useEffect } from 'react';
import {
    GameWindow,
    GameWrapper,
    QuestionText,
    AnswerButtons,
    QuestionWrapper,
    AnswerResultImages,
} from './styledComponents';
import CustomImage from '../../../../../customComponents/customImage/CustomImage';
import CustomButton from '../../../../../customComponents/customButton/CustomButton';
import correctAnswerImage from '../../../../../../assets/images/correct-answer-image.svg.png';
import notCorrectAnswerImage from '../../../../../../assets/images/not-correct-answer-image.png';
import colors from '../../../../../../manager/themeManager/colors';

const Game = ({
                  text,
                  answers,
                  correctAnswer,
                  answerResultList,
                  setAnswersListStore,
                  setCorrectAnswersCountStore,
              }) => {
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        setIsDisabled(false);
    }, [text, answers, correctAnswer]);

    const handleClick = answer => {
        const isCorrectAnswer = answer === correctAnswer;

        setIsDisabled(true);
        setAnswersListStore(isCorrectAnswer);
        isCorrectAnswer && setCorrectAnswersCountStore();
    };

    return (
        <GameWrapper>
            {answerResultList.length ?
                <AnswerResultImages>
                    {answerResultList.map((item, i) => {
                        return item
                            ? <CustomImage
                                key={i}
                                image={correctAnswerImage}
                                width={'31px'}
                                height={'31px'}
                                padding={'5px'}
                            />
                            : <CustomImage
                                key={i}
                                image={notCorrectAnswerImage}
                                width={'31px'}
                                height={'31px'}
                                padding={'5px'}
                            />
                    })}
                </AnswerResultImages>
                :
                null
            }
            <GameWindow>
                <QuestionWrapper>
                    <QuestionText
                        children={text}
                    />
                </QuestionWrapper>
                <AnswerButtons>
                    {answers?.map((answer, i) =>
                        <CustomButton
                            key={i}
                            text={answer}
                            isDisabled={isDisabled}
                            callback={() => handleClick(answer)}
                            activeBackgroundColor={answer !== correctAnswer && `${colors.wrongAnswerBgColor}`}
                        />
                    )}
                </AnswerButtons>
            </GameWindow>
        </GameWrapper>
    );
};

export default Game;
