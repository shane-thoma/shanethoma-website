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
          <li className="social linkedin" id="linkedin"><a href="https://www.linkedin.com/in/shanethoma/"><i className="fa fa-linkedin"></i></a></li>
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
        Junior undergraduate student at <a href="https://wvu.edu">West Virginia University</a> pursuing a major 
        in <a href="http://catalog.wvu.edu/undergraduate/collegeofengineeringandmineralresources/lanedepartmentofcomputerscienceand/computer_science/">Computer Science</a> and 
        a minor in <a href="http://catalog.wvu.edu/undergraduate/minors/data_science/">Data Science</a>.
      </p>
      <p>
        President of <a href="https://aiwvu.orgs.wvu.edu">Artificial Intelligence WVU</a>, an 
        organization dedicated to teaching students about everything related to artificial intelligence. 
      </p>
      <p>
        Research Intern at the <a href="https://testing.westvirginiaisopen.com/">West Virginia High Technology Foundation</a>. 
        My work primarily involves the creation of a foundational Model Context Protocol (MCP) server, enabling AI agents 
        to access and retrieve data from the <a href="https://psl.noaa.gov/data/nnja_obs/">NOAA NASA Joint Archive</a>.
      </p>
    </>
  );
}

function Classes(){
  return(
    <>
      <h1><b>Relevant Coursework</b></h1>
      <h2><strong>Artificial Intelligence</strong></h2>
      <p>
        Learned about foundational techniques and algorithms used in artificial intelligence, including 
        supervised, unsupervised, and reinforcement learning, as well as neural networks.
      </p>
      <h2><strong>Responsible and Safe Artificial Intelligence</strong></h2>
      <p>
        Discussed the ethics of AI usage in various domains and considered ways to improve the 
        ethical usage of AI in domains that could benefit from its inclusion.
      </p>
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
      <h2><a href="https://github.com/WVU-AIClub/LunarAutonmyChallenge" className="project">Lunar Autonomy Challenge</a></h2>
      <p>
        In collaboration with the other officers and some members of <a href="https://aiwvu.orgs.wvu.edu">Artificial Intelligence WVU</a>, 
        I competed in the <a href="https://lunar-autonomy-challenge.jhuapl.edu/">Lunar Autonomy Challenge</a>, 
        in which we trained an autonomous agent to complete tasks as it navigates a rover around the surface of the moon.
        Some tasks it was required to complete included calculating the average height of small sections of the moon, 
        tracking which of those sections have large rocks, and avoiding getting stuck on rough terrain and rocks.
      </p>
      <h2><a href="https://github.com/quote-generator-devs/quote-generator" className="project">Quotebook</a></h2>
      <p>
        Some friends and I worked on Quotebook, a quote searching and generating app. It utilizes the Gemini API 
        for quote generation and a quote API for quote searching, if real quotes exist related to the user's search. 
        Additionally, the app includes secure user account functionality for signing up and logging in, allowing a 
        logged in user to save quotes and edit their profile.
      </p>
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
    </>
  );
}

export default App;
