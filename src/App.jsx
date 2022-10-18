import React, {useEffect, useMemo, useRef} from 'react'
import {Header} from './components/header/Header'
import {About} from './components/about/About'
import {Experience} from './components/experience/Experience'
import {Services} from './components/services/Services'
import {Portfolio} from './components/portfolio/Portfolio'
import {Contact} from './components/contact/Contact'
import {Footer} from './components/footer/Footer'
import {Nav} from './components/nav/Nav'


function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const experienceRef = useRef();
  const servicesRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();
  
  const [activeNav, setActiveNav] = React.useState('#home');

  const home = useIntersection(homeRef, [0.7,1]);
  const about = useIntersection(aboutRef, [0.4,1]);
  const experience = useIntersection(experienceRef,[0.5,1]);
  const services = useIntersection(servicesRef,[0.4,1]);
  const portfolio = useIntersection(portfolioRef,[0.2,1]);
  const contact = useIntersection(contactRef,[0.5,1]);

  useEffect(() => {
    if (home) setActiveNav('#home');
    if (about) setActiveNav('#about');
    if (experience) setActiveNav('#experience');
    if (services) setActiveNav('#services');
    if (portfolio) setActiveNav('#portfolio');
    if (contact) setActiveNav('#contact');
  }, [home,about,experience,services,portfolio,contact]);

  return (
    <>
      <Header ref={homeRef}/>
      <Nav activeNav={activeNav} setActiveNav={setActiveNav}/>
      <About ref={aboutRef}/>
      <Experience ref={experienceRef}/>
      <Services ref={servicesRef}/>
      <Portfolio ref={portfolioRef}/>
      <Contact ref={contactRef}/>
      <Footer />
    </>
  );
}

function useIntersection(element, visibility) {
  const [isActive, setIsActive] = React.useState(false);

  const observer =  useMemo((view) => new IntersectionObserver(([entry]) => {
    setIsActive(entry.isIntersecting)},
  {threshold:visibility}
  ), [visibility] ); 



  useEffect(() => {
    
    const elementRef = element.current;

    if (elementRef) observer.observe(elementRef) ;
    return () => {
      if (elementRef) observer.unobserve(elementRef) ;
    };
  },[element, observer]);

  
  return isActive;

}

export default App;
