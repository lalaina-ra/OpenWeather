import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../styles/colors'
import logo from '../../assets/logo.png'
 
const StyledLink = styled(Link)`
  padding: 15px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    color: black;
  }
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`
const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 3px black;
	background-color: grey;
`

const TitleHeader = styled.h2`
  padding-left: 5px;
  text-align: left;
  color:aliceblue;
`
const StyleHeader = styled.div`
  display: flex;
	background-color: grey;
	justify-content: space-between;	
	align-items: center;
	padding-top: 5px;
	padding-bottom: 5px;
`

function Header() {
    return (
        <NavContainer>
            <Link to="/">
                <StyleHeader>
                    <HomeLogo src={logo}></HomeLogo>
                    <TitleHeader>OpenWeather</TitleHeader>
                </StyleHeader>
                
            </Link>
            <div>
                <StyledLink to="/">Home</StyledLink>  
                <StyledLink to="/profil">Profil</StyledLink>
                <StyledLink to="/apis">APIS</StyledLink>                 
                <StyledLink to="/faq">FAQ</StyledLink> 
            </div>
                     
        </NavContainer>
    )
}

export default Header