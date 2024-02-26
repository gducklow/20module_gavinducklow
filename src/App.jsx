import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div class="Portfolio Title page">
        <h1>DUCKLOW</h1>
            <nav>
                <ul id="navBarRight">
                    <li><a href="about-me">About Me</a></li>
                    <li><a href="my-work">My Work</a></li>
                    <li><a href="contact-me">Contact Me</a></li>
                </ul>
            </nav>
    <section class="portfolio-section">
                <h2>About Me</h2>
        <p>
            Hi, My name is Gavin. I live in the city of Carver for most of my life. I've done schooling through the University of Alabama for Biology with a focus on Kinesiology, then did some classes through Normandale Community College. In my free time I am an avid golfer, gamer, and workout enthusiast. I currently work as a receptionist for Benedictine Living Community in Shakopee and worked there for over a year.     
        </p> 
        <img src="./Assets/images/IMG_6292.jpg"/>
    </section>
    <section class="portfolio-section">
        
            <h2>Work History</h2>
        
        <p>
            My first ever job was as a soccer referee, I did that from when I was 13 till I turned 16. Then I went on to be a Crew Dive Member for Waterfront Restoration for 2 summers (Pictured Right). In college, I did part time work as a Cashier and Cart Boy at Home Depot for a short time, then did some Groundskeeping work at a prestigous golf course. Now I'm currently employed at Benedictine Living Community as a front desk receptionist.
        </p>
        <img src="./Assets/images/A57E1699-9F2A-40F2-9EF7-759451EDF0EA_Original.jpg"/>
    </section>
    <section class="portfolio-section">
        <section class="project_one">
            <img src="./Assets/images/ChefsVision.png"/>
            <a href="https://koeboldt.github.io/ProupGroject/index.html">Chef's Vision</a>
        </section>
    </section>
     <section class="contact-me">
            <h2>Email: gducklow@gmail.com</h2>
            <h2>Github: gducklow</h2>
            <h2>Instagram: gavinducklow</h2>
        </section>
        </div>
    </>
  )
}

export default App
