import {
    StyledChatPage,
    MessageInputContainer,
    SentMessage,
    MessageInput,
    ReceivedMessage,
    ReceivedMessageContainer,
    SendMessageButton,
    SendMessageIcon,
    SentMessageContainer,
    MessageInputSubContainer,
    MessagesContainer,
} from './ChatPage.styled'

const ChatPage = () => {
    return (
        <StyledChatPage>
            <MessagesContainer>
                <ReceivedMessageContainer style={{ marginLeft: 'auto', marginRight: 'auto', borderRadius: '20px', textAlign: 'center' }}>
                    <ReceivedMessage>
                        You are now chatting with dr Ahmed
                    </ReceivedMessage>
                </ReceivedMessageContainer>

                <SentMessageContainer>
                    <SentMessage>
                        Hi doctor Ahmed
                    </SentMessage>
                </SentMessageContainer>

                <SentMessageContainer>
                    <SentMessage>
                        I just wanted to kindly inform you that I am taking my prescription according to you advice
                    </SentMessage>
                </SentMessageContainer>

                <SentMessageContainer>
                    <SentMessage>
                        And I am actually feeling a lot better now and I wanted to say thanks :)
                    </SentMessage>
                </SentMessageContainer>

                <ReceivedMessageContainer>
                    <ReceivedMessage>
                        Hey anas
                    </ReceivedMessage>
                </ReceivedMessageContainer>

                <ReceivedMessageContainer>
                    <ReceivedMessage>
                        I am so glad to hear that
                    </ReceivedMessage>
                </ReceivedMessageContainer>

                <ReceivedMessageContainer>
                    <ReceivedMessage>
                        And always remember you can contact me at any time
                    </ReceivedMessage>
                </ReceivedMessageContainer>
            </MessagesContainer>

            <form>
                <MessageInputContainer>
                    <MessageInputSubContainer>
                        <MessageInput placeholder="Type your message.." />
                        <SendMessageButton type="submit">
                            <SendMessageIcon enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692z"/><path d="m23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"/></SendMessageIcon>
                        </SendMessageButton>
                    </MessageInputSubContainer>
                </MessageInputContainer>
            </form>
        </StyledChatPage>
    )
}

export default ChatPage
