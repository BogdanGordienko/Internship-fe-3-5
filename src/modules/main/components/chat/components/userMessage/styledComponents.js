import styled from 'styled-components';
import colors from '../../../../../../manager/themeManager/colors';

export const UserMessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: ${({ isSelfMessage }) => isSelfMessage ? 'auto' : 0};
    border-radius: 8px;
    padding: 10px 5px;
    min-width: 30%;
    max-width: 60%;
`;

export const MessageInfo = styled.div`
  display: flex;
  background-color: transparent;
  border-radius: 8px 8px 0 0;
  padding: 0 12px;
  user-select: none;
`;

export const MessageName = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0 5px;
    align-items: center;
    width: 100%;
    font-size: 12px;
`;

export const Name = styled.span`
    color: ${colors.brandTextColor};
`;

export const MessageContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 17px 6px;
    color: ${colors.lightTextColor};
    border-radius: 0 0 8px 8px;
    background: ${colors.messageGradientColor};
    box-shadow: ${colors.messageBoxShadowColor};
`;

export const Message = styled.span`
   word-wrap: break-word;
   line-height: 22px;
`;
