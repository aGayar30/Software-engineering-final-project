import styled from 'styled-components'

export const StyledChatPage = styled.div`
    width: 60%;
    background-color: white;
    height: 96vh;
    margin: 15px auto;
    padding: 20px;
    position: relative;
    border-radius: 10px;
`

export const MessagesContainer = styled.div`
    overflow: scroll;
    -ms-overflow-style: none;
    height: 91%;

    &::-webkit-scrollbar {
        display: none;
    }
`

const MessageContainer = styled.div`
    width: 57%;
    padding: 15px 32px 1px 32px;
    margin-bottom: 30px;

    // text attributes
    font-family: 'Roboto', serif;
    font-size: 22px;
    line-height: 25px;
    text-wrap: normal;
`

export const SentMessageContainer = styled(MessageContainer)`
    background-color: lightgray;
    border-radius: 19px 19px 0 19px;
    margin-left: auto;
`

export const SentMessage = styled.p``

export const ReceivedMessageContainer = styled(MessageContainer)`
    background-color: #561da2;
    border-radius: 19px 19px 19px 0;
    margin-right: auto;
    color: white;
`

export const ReceivedMessage = styled.p``

export const MessageInputContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
`

export const MessageInputSubContainer = styled.div`
    display: flex;
    //justify-content: space-between;
    height: 100%;
`

export const MessageInput = styled.input.attrs({ type: 'text' })`
    width: 83%;
    border: 1px solid lightgray;
    border-radius: 20px;
    margin-left: 20px;
    padding: 4px 20px;

    &:focus {
        outline: none;
    }

`

export const SendMessageButton = styled.button`
    width: 50px;
    margin: 0 26px;
    border: none;
    background-color: lightgray;
    border-radius: 50%;
`

export const SendMessageIcon = styled.svg`
    height: 20px;
    width: 20px;
    margin: 0 auto;
    fill: #561da2;
`
