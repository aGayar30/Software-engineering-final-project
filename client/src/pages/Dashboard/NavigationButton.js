import { useState } from 'react'

import StyledPage from './Dashboard.styled'
import icons from "../../components/Icons/icons";

const NavigationButton = (props) => {
    const { buttonText, icon, showArrow, customOnClick } = props
    const [showSubButtons, setShowSubButtons] = useState(false)
    const toggleSubButtons = () => setShowSubButtons(!showSubButtons)

    const handleOnClick = () => {
        if (showArrow) {
            toggleSubButtons()
        }
        else {
            if (customOnClick) customOnClick()
        }
    }

    return (
        <div>
            <StyledPage.NavigationButton onClick={handleOnClick}>
                <StyledPage.NavigationButtonContents>
                    {icon}{buttonText}{showArrow && icons.ChevronDown}
                </StyledPage.NavigationButtonContents>
            </StyledPage.NavigationButton>
            {showSubButtons && (
                <div>
                    {props.children}
                </div>
            )}
        </div>
    )
}

export default NavigationButton
