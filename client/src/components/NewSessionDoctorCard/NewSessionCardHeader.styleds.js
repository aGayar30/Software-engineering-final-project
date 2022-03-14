import styled from 'styled-components'

const HeadersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 20px auto -26px auto;
    text-align: center;

    align-items: center;
    padding: 20px 20px 5px 20px;
`

const Header = styled.p`
    width: 25%;
    color: #909397;
    font-size: 16px;
`

const AvailableDaysHeader = styled.p`
    width: 50%;
    color: #909397;
    font-size: 16px;
`

export default { HeadersContainer, Header, AvailableDaysHeader }
