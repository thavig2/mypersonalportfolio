import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home"> 
      <div className="about">
        <h2> Hello! My name is Thanussha Vignesh </h2>
        <div className="prompt">
          <p> An aspiring software engineer studying a master's in computer science.</p>
      </div>
      </div>
      <div className="skills"> 
        <h2> About Me </h2>
        <p> I graduated with a bachelor's degree in Speech and Hearing Science from Ohio State University. Initially, I aimed to pursue a career in speech therapy, which led me to volunteer at a speech clinic where I assisted in filing documents and aiding aphasia patients in enhancing their communication abilities. I considered leaving the speech therapy field to pursue computer science since I've always had an interest in technology. Therefore, I decided to pursue a master’s degree in computer science at DePaul. To prepare for classes at DePaul,  I decided during my break between leaving speech pathology graduate school, I would try to teach myself basic coding skills in python through LinkedIn learning. And then I started my master’s program at DePaul in January 2023. </p> 
        <ol className="list">
          <li className="item">
            <h2> Skills </h2>
            <span>Python, Java, HTML, CSS, C, JavaScript, ReactJS</span>
          </li>
        </ol>
        </div>
    </div>
  )
}

export default Home