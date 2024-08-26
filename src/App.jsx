// src/App.js
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import WhyUs from './Pages/WhyUs';
import ServicesPage from './Pages/ServicesPage';
import Overview from './Pages/Overview';
import Testimonials from './Pages/Testimonials';
import ContactUs from './Pages/ContactUs';
import Footer from './Components/Footer';
import GraphicsDesign from './servicesPages/GraphicsDesign';
import BlockChain from './servicesPages/BlockChain';
import WebAppDevelopment from './servicesPages/WebAppDevelopment';
import WebDevelopment from './servicesPages/WebDevelopment';
import DigitalMarketing from './servicesPages/DigitalMarketing';
import SeoEx from './servicesPages/SeoEx';
import ErpEx from './servicesPages/ErpEx';
import CloudSolutions from './servicesPages/CloudSolutions';
import AwsEx from './servicesPages/AwsEx';
import PosEx from './servicesPages/PosEx';

import ScrollToTop from '../src/Components/ScrollToTop'; // Import ScrollToTop

function App() {
  return (
    <>
      <Header />
      
      {/* Ensure ScrollToTop is included at the top */}
      <ScrollToTop /> 
      
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/WhyUs" Component={WhyUs} />
        <Route exact path="/ServicesPage" Component={ServicesPage} />
        <Route exact path="/GraphicsDesign" Component={GraphicsDesign} />
        <Route exact path="/BlockChain" Component={BlockChain} />
        <Route exact path="/WebAppDevelopment" Component={WebAppDevelopment} />
        <Route exact path="/WebDevelopment" Component={WebDevelopment} />
        <Route exact path="/DigitalMarketing" Component={DigitalMarketing} />
        <Route exact path="/SeoEx" Component={SeoEx} />
        <Route exact path="/ErpEx" Component={ErpEx} />
        <Route exact path="/CloudSolutions" Component={CloudSolutions} />
        <Route exact path="/AwsEx" Component={AwsEx} />
        <Route exact path="/PosEx" Component={PosEx} />
        <Route exact path="/Overview" Component={Overview} />
        <Route exact path="/Testimonials" Component={Testimonials} />
        <Route exact path="/ContactUs" Component={ContactUs} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
