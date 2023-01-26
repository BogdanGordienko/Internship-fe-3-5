import styled from 'styled-components';
import colors from '../../manager/themeManager/colors';

import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.div`
    width: 100%;
    height: 10vh;
    background-color: ${colors.darkMainBgColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    padding: 0 40px;
    min-width: 200px;
    background-color: ${colors.darkMainBgColor};
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;
