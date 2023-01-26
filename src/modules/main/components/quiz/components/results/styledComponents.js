import styled from 'styled-components';
import colors from '../../../../../../manager/themeManager/colors';

export const ResultsWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.mainBgColor};
  position: relative;
`;

export const ScoresContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 20px;
  top: 0;
  left: 0;
  user-select: none;
`;

export const ScoresHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 20px 2px;
`;

export const User = styled.span`
  color: ${colors.lightTextColor};
  font-size: 14px;
`;

export const Scores = styled.span`
  color: ${colors.lightTextColor};
  font-size: 14px;
`;

export const ButtonWrapper = styled.div`
  width: 166px;
  height: 33px;
  display: flex;
`;
