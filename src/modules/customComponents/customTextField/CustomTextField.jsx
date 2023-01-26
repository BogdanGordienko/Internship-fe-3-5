import React, { useRef, useState } from 'react';
import {
    TextField,
    TextFieldButton,
    TextFieldWrapper,
    TextFieldContainer,
} from './styledComponents';

const CustomTextField = ({
    sendMessage,
}) => {
    const [value, setValue] = useState('');

    const textRef = useRef();

    const onClickHandler = () => {
        if (value) {
            sendMessage(value);

            setValue('');
        }
    };

    const onChangeHandler = event => {
        const { target: { value } } = event;

        setValue(value);
    };

    const handleOnFocus = event => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();

            if (value) {
                sendMessage(value);
                setValue('');
            }
        }
    };

    return (
        <TextFieldContainer>
            <TextFieldWrapper>
                <TextField
                    ref={textRef}
                    value={value}
                    onChange={onChangeHandler}
                    onKeyDown={handleOnFocus}
                    placeholder={'Send a message...'}
                />
            </TextFieldWrapper>
            <TextFieldButton
                onClick={onClickHandler}
                children={'SEND'}
            />
        </TextFieldContainer>
    );
};

export default CustomTextField;
