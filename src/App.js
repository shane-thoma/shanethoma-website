import './App.css';
import {HashRouter, Routes, Route, NavLink} from "react-router-dom";
import ReactPlayer from 'react-player';

function App() {
  return (
    <>
      <HashRouter>
      <NavBar />
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
    <nav className="navbar">
      <ul className="navlinks">
        <span className="socials">
          <li className="social email" id="email"><a href="mailto:shanemthoma@gmail.com"><i className="fa fa-envelope"></i></a></li>
          <li className="social github" id="github"><a href="https://github.com/shane-thoma"><i className="fa fa-github"></i></a></li>
          <li className="social linkedin" id="linkedin"><a href="https://www.linkedin.com/in/shane-thoma-0276b4307"><i className="fa fa-linkedin"></i></a></li>
        </span>
        <span className="moreinfo">
          <li className="moreinfo projects"><NavLink to="/projects">Projects</NavLink></li>
          <li className="moreinfo classes"><NavLink to="/classes">Classes</NavLink></li>
          <li className="moreinfo about"><NavLink to="/" end>About</NavLink></li>
        </span>
      </ul>
    </nav>
  );
}

function About(){
  return(
    <>
      <img className="center top" src="/ShanePhoto.png" alt="Shane Thoma"></img>
      <h1><b>Shane Thoma</b></h1>
      <p>
        Sophomore undergraduate student at <a href="https://wvu.edu">West Virginia University</a> pursuing a major 
        in <a href="http://catalog.wvu.edu/undergraduate/collegeofengineeringandmineralresources/lanedepartmentofcomputerscienceand/computer_science/">Computer Science</a> and 
        a minor in <a href="http://catalog.wvu.edu/undergraduate/minors/data_science/">Data Science</a>.
      </p>
      <p>
        Secretary of <a href="https://aiwvu.orgs.wvu.edu">Artificial Intelligence WVU</a>, an 
        organization dedicated to teaching students about everything related to artificial intelligence. 
      </p>
      <p>
        Proctor for one of my previous Computer Science classes (similar to a Teaching Assistant). 
        Responsibilities include hosting open lab times for the students to come ask for help and 
        get their work graded, as well as collaborating with the other proctors and the teacher to update the 
        curriculum and complete other tasks as needed.
      </p>
    </>
  );
}

function Classes(){
  return(
    <>
      <h1><b>Relevant Coursework</b></h1>
      <h2><strong>Software Engineering</strong></h2>
      <p>
        Learned about software engineering  best practices and created a web-based application using data from NOAA.
      </p>
      <h2><strong>Introduction to Data Science</strong></h2>
      <p>
        Learned about data preprocessing, data cleaning, statistics, using Linux, 
        coding using Python, and basic machine learning.
      </p>
    </>
  );
}

function Projects(){
  return(
    <>
      <h1><b>Project Portfolio</b></h1>
      <h2><a href="https://github.com/WVU-CS330-2024-08-Group09/PlaceFindr" className="project">PlaceFindr</a></h2>
      <ReactPlayer className="center" url="/project_portfolio/placefindr_demo.mov" controls />
      <p>
        In my Software Engineering class, I worked in a group to create PlaceFindr, a web-based  
        application that takes user input on living conditions and outputs hotspots of recommended locations 
        that the user may like to live at or near. It made these recommendations using climate data from 
        the <a href="https://noaa.gov">National Oceanic and Atmospheric Administration (NOAA)</a>. The app 
        compared the user's input to the climate conditions of coordinates across the United States to find 
        suitable locations. The application was hosted on a headless Linux server for a short time. The video above 
        provides a short demo of the product, recorded and verbally explained by one of the other team members.
      </p>

      <h1><b>Current Projects</b></h1>
      <p>
        I am currently working with the other officers and some members of <a href="https://aiwvu.orgs.wvu.edu">Artificial Intelligence WVU</a> on 
        the <a href="https://lunar-autonomy-challenge.jhuapl.edu/">Lunar Autonomy Challenge</a>, 
        in which we are training an autonomous agent to complete tasks as it navigates a rover around the surface of the moon.
        Some tasks it must complete include calculating the average height of small sections of the moon, 
        tracking which of those sections have large rocks, and avoiding getting stuck on rough terrain and rocks.
      </p>
    </>
  );
}

export default App;
