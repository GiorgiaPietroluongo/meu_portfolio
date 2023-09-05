import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App 
    nome = {"kaua"}
    />
    <App 
    nome = {"carlos"}
    /> */}
  <Navbar 
    item0 = {"Nome"}
    item1 = {"Projetos"}
    item2 = {"Experiência"}
    item3 = {"Contato"}
    item4 = {"Sobre mim"}

    
    />

    <Footer
    Titulo1 = {"Meu Site"}
    item1 = {"Site "}
    item2 = {"Instagram"}
    item3 = {"Facebook"}

    Titulo2 = {"Contato"}
    item4 = {"Celular"}
    item5 = {"Telefone"}
    
    />

<Footer
    Titulo1 = {"Footer 2"}
    item1 = {"Youtube "}
    item2 = {"TikTok"}
   

    Titulo2 = {"Sobre mim"}
    item4 = {"Portfolio"}
   
    
    />

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();