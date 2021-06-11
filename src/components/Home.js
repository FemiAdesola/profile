import React, {useState} from 'react'

const Home = () => {
const [image]= useState('../img/gra.JPG')
    return (
        <div className='home'>
            <div >

            <header className='home'>
                <h1 className="Xlg-heading">
            Femi Adesola<span class="text-secondary"> Oyinloye</span>
        </h1>
        <h2 className="sm-heading"> Biobased Process Engineer, Designer, Lab Technician & Web Developer 
                     
        </h2>
                    <div>
            <img src={image} alt='' className='Femi_Adesola'/>
            </div>
        <div className="icons">
            <a href="https://www.linkedin.com/in/femi-adesola-oyinloye-106454145/" className="icon" target="_blank" rel="">
                <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    
            <a href="#1" className="icon">
                <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#1" className="icon">
                <i className="fab fa-github fa-2x"></i>
            </a>
        </div>
            </header>
                <div>
                    
            </div>
           
        </div>
        </div>
    )
}

export default Home;