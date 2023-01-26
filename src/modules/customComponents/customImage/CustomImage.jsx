import React from 'react';
import {
    Image,
    ImageWrapper,
} from './styledComponents';

const CustomImage = ({
    image,
    width,
    height,
    margin,
    padding,
    borderRadius,
}) => {
    return (
        <ImageWrapper
            margin={margin}
            padding={padding}
        >
            <Image
                src={image}
                width={width}
                height={height}
                borderRadius={borderRadius}
            />
        </ImageWrapper>
    );
};

export default CustomImage;