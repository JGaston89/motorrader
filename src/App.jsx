import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
// import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import Catalogo from './components/catalogo/Catalogo'
import Footer from './components/footer/Footer'
// import Contact from './components/contact/Contact'
// import Footer from './components/footer/Footer'


const App = () => {
  return (
    <> 
      <Sidebar/>
      <Header/>
      {/* <Nav /> */}
      <Catalogo/>
      <Footer/>
    </>
  )
}

export default App