import styled from 'styled-components';
import colors from '../../../manager/themeManager/colors';

export const TextFieldContainer = styled.div`
    height: 15%;
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
`;

export const TextFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 75%;
`;

export const TextField = styled.textarea`
  width: 100%;
  height: 91%;
  resize: none;
  overflow-y: auto;
  border: none;
  border-radius: 8px;
  background: ${colors.textFieldBgColor};
  padding: 15px;
  color: ${colors.textFieldTextColor};
  cursor: default;
  ::-webkit-scrollbar {
    display: none;
  }
  &:focus {
    outline: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const TextFieldButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.brandTextColor};
  min-width: 21%;
  background: transparent;
  width: 50px;
  height: 37px;
  border-radius: 8px;
  border: 1px solid ${colors.brandTextColor};
  user-select: none;
  cursor: pointer;
`;
