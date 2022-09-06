import logo from '../assets/logo.png'
import Banner from './Banner'


function App() {
  return (
    <div>
      <div className="ow-header">
        <Banner>
           <img  src={logo} alt="OpenWeather" className="ow-logo"/>     
          <h2 className='ow-title'>OpenWeather</h2>
        </Banner>
              
      </div>
    </div>
  );
}

export default App;
