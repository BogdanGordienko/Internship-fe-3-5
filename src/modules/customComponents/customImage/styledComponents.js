import styled from 'styled-components';

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    margin: ${props => props.margin};
    padding: ${props => props.padding};
`;

export const Image = styled.img`
    border-radius: ${props => props.borderRadius};
    width: ${props => props.width};
    height: ${props => props.height};
`;
