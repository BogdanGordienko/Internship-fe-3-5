import styled from 'styled-components';
import colors from '../../../../../../manager/themeManager/colors';

export const ReadyForGameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReadyText = styled.span`
  font-size: 30px;
  color: ${colors.lightTextColor};
  padding: 0 0 20px;
  user-select: none;
`;

export const ButtonWrapper = styled.span`
  width: 170px;
  height: 30px;
`;
