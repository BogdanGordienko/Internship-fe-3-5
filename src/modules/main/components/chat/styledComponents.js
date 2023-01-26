import styled from "styled-components";
import colors from '../../../../manager/themeManager/colors';

export const ChatContainer = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 0 15px 0;
    border-left: 1px solid ${colors.lightTextColor};
    border-radius: 8px;
    background: url(${({chatBackgroundImage}) => chatBackgroundImage})};
`;

export const MessagesWrapper = styled.div`
    height: 100%;
    overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
