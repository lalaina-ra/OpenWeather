import styled from 'styled-components'
import colors from '../../styles/colors'
import { useTheme } from '../../styles/Hooks'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
    color: black;
	padding: 32px;
	border-top: solid 3px black;
	flex-direction: column;
	font-weight: 500;
	background-color: rgb(223, 219, 219);
`
 
const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
`

function Footer() {
    const { toggleTheme, theme } = useTheme()

    return (
		<FooterContainer>
			<NightModeButton onClick={() => toggleTheme()}>Changer de mode : {theme === 'light' ? '☀️' : '🌙'} © Copyrights 2022 ® All Rights Reserved</NightModeButton>
        </FooterContainer>
    )
}

export default Footer