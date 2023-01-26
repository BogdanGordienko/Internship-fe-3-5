import styled from 'styled-components';
import colors from '../../../../../../../../manager/themeManager/colors';

export const ScoresWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const UserName = styled.span`
  display: flex;
  padding: 0 10px;
  color: ${colors.brandTextColor};
`;

export const Scores = styled.span`
  margin-left: auto;
  padding: 0 5px;
  font-size: 20px;
  color: ${colors.lightTextColor};
`;
