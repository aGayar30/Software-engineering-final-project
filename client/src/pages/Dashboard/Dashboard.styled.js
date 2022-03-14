import styled from 'styled-components'
import { Link } from "react-router-dom"

const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`

const Navigation = styled.div`
    width: 350px;
    height: inherit;
    background-color: #3b294d;
`

const PageContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: lightgray;
`

const NavigationButton = styled.button`
    width: 100%;
    background-color: #54426b;
    border: none;
    height: 45px;
    color: white;
    text-align: left;
    padding-left: 60px;

    &:hover {
        color: #fbd047;
    }
`

const NavigationButtonContents = styled.div`
    display: flex;
    align-items: center;
`

const NavigationSubButton = styled(NavigationButton)`
    background-color: transparent;
    padding-left: 80px;
`

const LogoTitle = styled.h1`
    margin: 0;
    padding: 12px 0;
    text-align: center;
    color: white;
    letter-spacing: 2px;
    font-family: 'Fredoka One', cursive;
    cursor: pointer;
`

export default {
    Page,
    Navigation,
    NavigationButton,
    NavigationSubButton,
    LogoTitle,
    NavigationButtonContents,
    PageContent,
}
