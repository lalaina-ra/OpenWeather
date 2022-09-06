import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './components/Header'
import Error from './components/Error'
import Apis from './Pages/Apis'
import Faq from './Pages/Faq'
import Profil from './Pages/Profil'
//import Footer from './components/Footer'
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider, SurveyProvider  } from './styles/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/profil" element={<Profil />}/>
              <Route path="/apis" element={<Apis />}/>
              <Route path="/faq" element={<Faq />}/>              
              <Route element={<Error />}/>
            </Routes>
             
        </SurveyProvider>
      </ThemeProvider>      
    </Router>      
  </React.StrictMode>
);
