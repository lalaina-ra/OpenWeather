/*import { useContext  } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'*/
import styled from 'styled-components'
import '../../styles/Global.css'
/*import colors from '../../styles/colors'
import { Loader } from '../../styles/Atoms'
import { SurveyContext } from '../../styles/Context'
import { useFetch, useTheme } from '../../styles/Hooks'*/

const Wrapper = styled.main`
  min-height: 100%;
  height: auto!important;
  margin-bottom: -348px;
  padding-top: 20px;
  padding-bottom: 348px;
  display: block;
`
const Topic = styled.div`
  margin-top: -20px;
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
`

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
`
const StyleContainer = {
   '@media (max-width: 768px)': {
    width: 750,
  },
};
function Apis() {
  return (
    <Wrapper>
      <Topic>
        <Container style={StyleContainer}>
          <div className="row">
              <div class="col-sm-7">
                <h1 className='breadcrumb-title'>Weather API</h1>
              </div>
              <div class="col-sm-5">
                <ul className='breadcrumb pull-right hidden-xs'>
                  <li>
                    <a href="/" className='orange-text'>Home</a>
                  </li>
                  <li className='breadcrumb_leaf'>
                    Weather API
                  </li>
                </ul>
                
              </div>
          </div>
        </Container>
      </Topic>
    </Wrapper>
    
  )
}

export default Apis