import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink, Redirect} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Testimonials from './components/Openmenu'



//img src={logo} className="App-logo" alt="logo" />

function App() {

  return (
      <BrowserRouter>
      <div >
        <header>
          <Header />
          
          <Switch>
        <Route exact path="/" component={Home} />
            <Route path="/Testimonials" component={Testimonials} />
            <Route path="/About" component={About} />
            <Route exact strict path="/Contacts" component={Contacts} />
             <Route exact strict path="/Skills" component={Skills} />
            <Route exact strict path="/Education" component={Education} />
            <Route exact strict path="/Experience" component={Experience} />
             <Route  component={()=><h2 className='notfound'>Not Available at moment check back later</h2>} />
        </Switch>
      <Footer/>
      </header>
    </div>
      </BrowserRouter>
    
  );
}

export default App;
