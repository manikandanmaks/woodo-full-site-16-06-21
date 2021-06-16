import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './pages/WFMainHeader';
import './css/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import About from './pages/WFAboutSection';
import Furniture from './pages/WFFurnitureSection';
import FurnitureImage from './pages/WFFurnitureImageSection';
import Contact from './pages/WFContactSection';
import Footer from './pages/WFMainFooter';
import Testimonial from './pages/WFTestimonial';
import CopyRight from './pages/WFCopyRight';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <About />
    <Furniture />
    <FurnitureImage />
    <Testimonial />
    <Contact />
    <Footer />
    <CopyRight />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
