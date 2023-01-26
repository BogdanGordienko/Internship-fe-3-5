import React, { useEffect } from 'react';
import CustomButton from '../../../../../customComponents/customButton/CustomButton';
import {
    User,
    Scores,
    ScoresHeader,
    ButtonWrapper,
    ResultsWrapper,
    ScoresContainer,
} from './styledComponents';
import UserScores from './components/userScores/UserScores';

const Results = ({
    usersResultsList,
    setIsShowResults,
}) => {
    useEffect(() => {
           return () => {
               setIsShowResults(false)
           };
    },[]);

    return (
        <ResultsWrapper>
            {usersResultsList.length ?
                <ScoresContainer>
                    <ScoresHeader>
                        <User children={'user'}/>
                        <Scores children={'scores'}/>
                    </ScoresHeader>
                        {usersResultsList.map(item =>
                            <UserScores
                                key={item.photoURL}
                                name={item.displayName}
                                image={item.photoURL}
                                scores={item.correctAnswersCount}
                            />
                        )}
                </ScoresContainer>
                : null
            }
            <ButtonWrapper>
                <CustomButton
                    text={'ok'}
                    callback={() => setIsShowResults(false)}
                />
            </ButtonWrapper>
        </ResultsWrapper>
    );
};

export default Results;
