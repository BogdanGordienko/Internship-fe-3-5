import React from 'react';
import {
    Button,
    ButtonText,
    CustomButtonWrapper,
} from './styledComponents';
import CustomImage from "../customImage/CustomImage";

const CustomButton = ({
    text,
    image,
    callback,
    fontSize,
    isDisabled,
    borderColor,
    backgroundColor,
    isInversionTextColor,
    activeBackgroundColor,
}) => {
    return (
        <CustomButtonWrapper
            isDisabled={isDisabled}
            borderColor={borderColor}
            backgroundColor={backgroundColor}
            activeBackgroundColor={activeBackgroundColor}
        >
            {image &&
                <CustomImage
                    image={image}
                    width={'20px'}
                    height={'20px'}
                    padding={'8px'}
                />
            }
            <Button
                onClick={callback}
                backgroundColor={backgroundColor}
            >
                <ButtonText
                    children={text}
                    fontSize={fontSize}
                    isInversionTextColor={isInversionTextColor}
                />
            </Button>
        </CustomButtonWrapper>
    );
};

CustomButton.defaultProps = {
    fontSize: '20px',
    isDisabled: false,
    borderColor: '#56bab7',
    isInversionTextColor: false,
    activeBackgroundColor: '#56bab7',
}

export default CustomButton;
