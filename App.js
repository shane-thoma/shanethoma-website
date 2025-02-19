import logo from './logo.svg';
import './App.css';
import {HashRouter, Routes, Route, NavLink} from "react-router-dom";

function App() {
  return (
    <>
      <HashRouter>
      <NavBar />
      <img class="center top" src="/ShanePhoto.png" alt="Photo of Shane Thoma"></img>
        <Routes>
          <Route path="/" exact element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </HashRouter>
    </>
  );
}

function NavBar(){
  return(
    <nav class="navbar">
      <ul class="navlinks">
        <span class="socials">
          <li class="social email" id="email"><a href="mailto:shanemthoma@gmail.com"><i class="fa fa-envelope"></i></a></li>
          <li class="social github" id="github"><a href="https://github.com/shane-thoma"><i class="fa fa-github"></i></a></li>
          <li class="social linkedin" id="linkedin"><a href="https://www.linkedin.com/in/shane-thoma-0276b4307"><i class="fa fa-linkedin"></i></a></li>
        </span>
        <span class="moreinfo">
          <li class="moreinfo projects"><NavLink to="/projects">Projects</NavLink></li>
          <li class="moreinfo classes"><NavLink to="/classes">Classes</NavLink></li>
          <li class="moreinfo about"><NavLink to="/" end>About</NavLink></li>
        </span>
      </ul>
    </nav>
  );
}

function About(){
  return(
    <>
      <h1><b>Shane Thoma</b></h1>
      <p>
        I am a sophomore undergraduate student at <a href="https://wvu.edu">West Virginia University</a> pursuing a major 
        in <a href="http://catalog.wvu.edu/undergraduate/collegeofengineeringandmineralresources/lanedepartmentofcomputerscienceand/computer_science/">Computer Science</a> 
        and a minor in <a href="http://catalog.wvu.edu/undergraduate/minors/data_science/">Data Science</a>. 
        I am the secretary of <a href="https://aiwvu.orgs.wvu.edu">Artificial Intelligence WVU</a>, 
        a student organization dedicated to teaching students about the applications of artificial intelligence.
      </p>
    </>
  );
}

function Classes(){
  return(
    <>
      <h1><b>Relevant Coursework Taken</b></h1>
      <p>
        I have taken <strong>Software Engineering</strong>, in which I learned about software engineering 
        best practices and created a web-based application using data from NOAA.
      </p>
      <p>
        I have taken <strong>Introduction to Data Science</strong>, an introductory class that began my 
        Data Science minor. I learned about data preprocessing, data cleaning, statistics, 
        coding using Python, and basic machine learning.
      </p>
    </>
  );
}

function Projects(){
  return(
    <>
      <h1><b>Project Portfolio</b></h1>
      <h2><b><a href="https://github.com/WVU-CS330-2024-08-Group09/PlaceFindr">PlaceFindr</a></b></h2>
      <a href="/project_portfolio/placefindr_demo.mov"></a>
      <p>
        In my Software Engineering class, I worked in a group to create PlaceFindr, a web-based  
        application that takes user input on living conditions and outputs hotspots of recommended locations 
        that the user may like to live in or near. It made these recommendations using climate data from 
        the <a href="https://noaa.gov">National Oceanic and Atmospheric Administration (NOAA)</a> 
        and comparing the user's input and comparing it to the conditions of coordinates across 
        the United States. The application was hosted on a headless Linux server for a short time.
      </p>

      <h1><b>Current Projects</b></h1>
      <p>
        I am currently working with the other officers and some members of 
        <a href="https://aiwvu.orgs.wvu.edu">Artificial Intelligence WVU</a> on the 
        <a href="https://lunar-autonomy-challenge.jhuapl.edu/">Lunar Autonomy Challenge</a>, 
        in which we are training an agent to complete tasks as it navigates a rover around the surface of the moon.
        Some tasks it must complete include calculating the average height of small sections of the moon, 
        tracking which of those sections have large rocks, and avoiding getting stuck on rough terrain and rocks.
      </p>
    </>
  );
}

export default App;
