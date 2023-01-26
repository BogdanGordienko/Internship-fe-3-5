import React, { useEffect, useRef } from 'react';
import {
    ChatContainer,
    MessagesWrapper,
} from './styledComponents';
import UserMessage from './components/userMessage/UserMessage';
import CustomTextField from '../../../customComponents/customTextField/CustomTextField';
import chatBackgroundImage from '../../../../assets/images/bgchat.png';

const Chat = ({
    userId,
    messages,
    sendMessage,
}) => {
    const messageEl = useRef(null);

    useEffect(() => {
        if (messageEl) {
            messageEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            });
        }
    }, []);

    return (
        <ChatContainer
            chatBackgroundImage={chatBackgroundImage}
        >
            <MessagesWrapper ref={messageEl}>
                {messages?.map((message) =>
                    <UserMessage
                        key={message.createdAt}
                        userId={userId}
                        message={message}
                    />
                )}
            </MessagesWrapper>
            <CustomTextField
                type={'text'}
                sendMessage={sendMessage}
            />
        </ChatContainer>
    );
};

export default Chat;
