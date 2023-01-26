import React from 'react';
import {
    Scores,
    UserName,
    ScoresWrapper,
} from './styledComponents';
import CustomImage from '../../../../../../../customComponents/customImage/CustomImage';

const UserScores = ({
    name,
    image,
    scores,
}) => {
    return (
        <ScoresWrapper>
            <CustomImage
                image={image}
                width={'25px'}
                height={'25px'}
                borderRadius={'50px'}
            />
            <UserName
                children={name}
            />
            <Scores
                children={scores}
            />
        </ScoresWrapper>
    );
};

export default UserScores;