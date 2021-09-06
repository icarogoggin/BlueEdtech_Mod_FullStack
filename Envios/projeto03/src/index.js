import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import App from './App';
import Nav from './components/Nav';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div class="admin">
    <Header/>
    <Nav/>
    <App/> {/*Esse componente corresponde a parte mutavel do meu Dashboard*/}
    <Footer/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
