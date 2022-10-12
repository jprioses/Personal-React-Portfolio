import React from 'react'
import {Header} from './components/header/Header'
import {About} from './components/about/About'
import {Experience} from './components/experience/Experience'
import {Services} from './components/services/Services'

function App() {
  return (
    <>
      <Header/>
      <About/>
      <Experience/>
      <Services/>
    </>
  );
}

export default App;
