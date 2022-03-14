import Styled from './NewSessionCardHeader.styleds'

const NewSessionCardHeaders = () => {
    return (
        <Styled.HeadersContainer>
            <Styled.Header>Name</Styled.Header>
            <Styled.Header>Type</Styled.Header>
            <Styled.AvailableDaysHeader>Available Days</Styled.AvailableDaysHeader>
        </Styled.HeadersContainer>
    )
}

export default NewSessionCardHeaders
