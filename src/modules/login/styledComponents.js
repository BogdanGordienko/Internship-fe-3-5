import styled from 'styled-components';
import colors from '../../manager/themeManager/colors';

export const LoginWrapper = styled.div`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.mainBgColor};
`;

export const ButtonContainer = styled.div`
    width: 550px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    border-radius: 8px;
    background-color: ${colors.darkMainBgColor};
`;
