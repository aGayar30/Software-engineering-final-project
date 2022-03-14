import Styled from './UpcomingSessionsCardHeaders.styled'

const UpcomingSessionsCardHeaders = () => {
    return (
        <Styled.HeadersContainer>
            <Styled.Header>Name</Styled.Header>
            <Styled.Header>Date</Styled.Header>
            <Styled.Header>Duration</Styled.Header>
            <Styled.Header>Type</Styled.Header>
            <Styled.Header>Status</Styled.Header>
        </Styled.HeadersContainer>
    )
}

export default UpcomingSessionsCardHeaders
