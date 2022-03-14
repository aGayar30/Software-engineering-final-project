import styled from 'styled-components'

const Page = styled.div`
    max-width: 70%;
    margin: 100px auto;
`

const SessionsContainer = styled.div`
    overflow: scroll;
    -ms-overflow-style: none;
    height: 60vh;
    margin-top: 20px;

    &::-webkit-scrollbar {
        display: none;
    }
`

export default { Page, SessionsContainer }
