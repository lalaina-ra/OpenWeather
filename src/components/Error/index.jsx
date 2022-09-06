import styled from 'styled-components'
import colors from '../../styles/colors'
import ErrorIllustration from '../../assets/404.png'
import { useTheme } from '../../styles/Hooks'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  align-items: center;
`

const ErrorTitle = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const Illustration = styled.img`
  max-width: 800px;
`

function Error() {
  const { theme } = useTheme()
    return (
      <ErrorWrapper theme={theme}>
        <ErrorTitle theme={theme}>Oops...</ErrorTitle>
        <Illustration src={ErrorIllustration}></Illustration>
        <ErrorSubtitle>The page you were looking for doesn't exist.</ErrorSubtitle>
      </ErrorWrapper>
    )
  }
  
  export default Error