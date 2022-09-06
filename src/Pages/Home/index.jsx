import '../../styles/Global.css'
import styled from 'styled-components'
//import { StyledLink } from '../../styles/Atoms'
import colors from '../../styles/colors'
import { useTheme } from '../../styles/Hooks'
import HomeLogo from '../../assets/home.png'

const HomeIntro = styled.div`    
    padding-left: 8pt;
    padding-right: 8pt;
`
const HomeWrapper = styled.div`
  min-height: 100%;
  heigh: auto!important;
  margin-bottom: -348px;
  padding-bottom: 348px;
  padding-top: 0;
`
const HomeContainer = styled.section`
    background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
    width: 100%;
    display: grid;
    justify-items: center;
    min-height: 250px;    
    max-width: 100%;    
    grid-gap: 32pt;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    margin-top: 0;
    margin-bottom: 10px;
    padding: 10px;
`
const StyledTitle = styled.h1`
    font-size: 45px;  
    font-weight: revert;
    font-family: "Space Grotesk", Arial, sans-serif !important;
    padding-bottom: 30px;
    marging-top: 20px
    margin-bottom: 10px
    max-width: 280px;
    line-height: 50px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`
const MainSection = styled.div`
    display: flex;
    flex-direction: row;
`

const Image = styled.img`
    width: 430px;
    height: 350px;
    margin-top: 30px;     
    vertical-align: middle;
    border: 0;
`
const DocContainer = styled.div`
    display: grid;
    max-width: 1200px;
    padding: 8pt;
    padding-left: 15px;
    padding-right: 15px;
`

const MaterialTable = styled.table`
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
    margin-bottom: 24pt;
    background-color: transparent;
    diplay: table;
    border-spacing: 0;
    border-collaspe: collaspe;
    border-color: grey;
    border-top: 1px solid #F2F2F2;
    vertical-align: top;
`

function Home(){
    const { theme } = useTheme()
    return (
        <HomeWrapper>
            <HomeContainer theme={theme}>
                <HomeIntro>
                    <StyledTitle theme={theme}>
                        <br/>
                        <span className='orange-text'>OpenWeather</span>               
                        <br/>
                        for Business
                    </StyledTitle>
                        <br/>
                        <h3>           
                            We develop effective tools to provide business with easy, smart solutions that cover complete spectrum of weather data needs. Global coverage.
                        </h3>
                        <br/>
                        <a className='btn_block orange round' href="#main_products">Our Products</a>
                        <a className='btn_block orange round' href='#main_about'>About Us</a>                               
                </HomeIntro>
                <MainSection>
                    <Image src={HomeLogo}></Image>
                </MainSection>                             
            </HomeContainer>
            <DocContainer>
                <h2>Getting started</h2>                
                <h4><p>OpenWeather is a free online service that provides access to weather forecasts for a city. It offers different APIs to get weather data of a location.</p></h4>
                <h3>How to call OpenWeather APIs with a freemium plan</h3>
                <h4>
                    <p>
                        The API key is all you need to call any of our weather APIs. Once you sign up using your email, the API key (APPID) will be sent to you in a confirmation email.
                Your API keys can always be found on your account page, where you can also generate additional API keys if needed. Check our documentation page to find all 
                technical information for each product. Documentation is an essential guide with actual examples and comprehensive description of API calls, responses and parameters.
                    </p>                    
                </h4>
                <h3>API key is everything you need to call for weather data</h3>
                <h4>
                Please, use your API key in every API call you make. Our platform only processes the API requests with an API key included. The API keys linked to your account are used
                to take count of the calls you make to OpenWeather platform.
                </h4>
                <div>
                    <h3>Example on how to make an API call using your API key</h3>
                    <p className='sub-header'>API call</p>
                    <div className='api'>
                            <code>
                            http://api.openweathermap.org/data/2.5/forecast?id=524901&amp;appid=
                            <a href="https://home.openweathermap.org/api_key" target="_blank" rel="noreferrer noopener" className='orange-text'>&#123;API key&#125;</a>                        
                            </code>
                    </div>
                </div>
                <MaterialTable>
                    <tbody>
                        <tr>
                            <th colspan="3">Parameters</th>
                        </tr>
                        <tr>
                            <td>
                               <code className='nowrap'>appid</code> 
                            </td>
                            <td class="sub">required</td>
                            <td>
                                Your unique API key (you can always find it on your account page under the
                                <a href="https://home.openweathermap.org/apikeys" target="_blank" rel="noreferrer noopener" className='orange-text'>&nbsp;"API KEY"&nbsp;tab)</a>
                            </td>
                        </tr>
                    </tbody>
                </MaterialTable>
                <div>
                    <p className='sub-header'>Exemple of API call</p>
                    <div className='api'>                        
                        <code>
                        <a target="_blank" href="http://samples.openweathermap.org/data/2.5/forecast?id=524901&amp;appid=b1b15e88fa797225412429c1c50c122a1"
                        rel="noreferrer noopener" className='orange-text'>
                            api.openweathermap.org/data/2.5/forecast?id=524901&amp;appid=&#123;API key&#125;</a>
                        </code>
                    </div>  
                </div>                    
            </DocContainer>                
       </HomeWrapper>
    )
}

export default Home