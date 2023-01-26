import React from 'react';
import {
    ReadyText,
    ButtonWrapper,
    ReadyForGameWrapper,
} from './styledComponents';
import CustomButton from '../../../../../customComponents/customButton/CustomButton';
import colors from '../../../../../../manager/themeManager/colors';

const ReadyForGame = ({
    callback,
    isUserReadyToStartQuiz,
}) => {
    return (
        <ReadyForGameWrapper>
            <ReadyText
                children={
                    isUserReadyToStartQuiz
                        ? 'Ready to start The Quiz'
                        : 'START if you are ready to start Quiz'
                }
            />
            <ButtonWrapper>
                <CustomButton
                    text={isUserReadyToStartQuiz ? 'CANCEL' : 'START'}
                    callback={callback}
                    isInversionTextColor={isUserReadyToStartQuiz}
                    backgroundColor={isUserReadyToStartQuiz && `${colors.brandBgColor}`}
                />
            </ButtonWrapper>
        </ReadyForGameWrapper>
    );
};

export default ReadyForGame;
