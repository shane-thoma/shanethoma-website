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
          <li class="social instagram" id="instagram"><a href="https://www.instagram.com/thoma.shane"><i class="fa fa-instagram"></i></a></li>
        </span>
        <span class="moreinfo">
          <li class="moreinfo projects"><NavLink to="/projects">Current Projects</NavLink></li>
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
        in <a href="http://catalog.wvu.edu/undergraduate/collegeofengineeringandmineralresources/lanedepartmentofcomputerscienceand/computer_science/">Computer Science</a> and 
        a minor in <a href="http://catalog.wvu.edu/undergraduate/minors/data_science/">Data Science</a>. 
        I am the secretary of  <a href="https://aiwvu.orgs.wvu.edu">Artificial Intelligence WVU</a>, 
        an organization dedicated to teaching students about the applications of artificial intelligence.
      </p>
    </>
  );
}

function Classes(){
  return(
    <>
      <h1><b>Relevant Coursework Taken</b></h1>
      <p>
        I am currently taking <strong>Software Engineering</strong>, in which we learn about software engineering 
        best practices and creating web-based applications using data from NOAA.
      </p>
      <p>
        I am currently taking <strong>Data and File Structures</strong>, learning about the different 
        types of tables used to store data, how they are implemented, and actually designing these structures.
      </p>
      <p>
        I am currently taking <strong>Introduction to Data Science</strong>, an introductory class to begin my 
        Data Science minor. I am learning about data preprocessing, data cleaning, statistics, 
        coding using Python, and basic machine learning
      </p>
    </>
  );
}

function Projects(){
  return(
    <>
      <h1><b>My Current Projects</b></h1>
      <p>
        My most recently completed project was completed in collaboration with others 
        in <a href="https://aiwvu.orgs.wvu.edu">Artificial Intelligence WVU</a>.
        We cleaned over 1000 rows of data and created a random forest AI model to predict the scores of the teams based 
        on their offensive and defensive stats compared to the other team's. This project can be 
        viewed on <a href="https://github.com/WVU-AIClub/CFB-Score-Predictor">AIWVU's GitHub</a>.
      </p>
      <p>
        I am working on a group project in my Software Engineering class. The final product is going to be a web-based 
        application that will take user input on living conditions and output recommended locations that the 
        user may like to live in and near. It will make these recommendations using climate data from 
        the <a href="https://noaa.gov">National Oceanic and Atmospheric Administration (NOAA)</a>, as well as other 
        data from the <a href="https://planetarycomputer.microsoft.com">Microsoft Planetary Computer</a>, such as 
        population density and building density.
      </p>
      <p>
        Artificial Intelligence WVU is also working on an AI model that will use visual data to learn to play Mario Kart. 
        The model will be trained using reinforcement learning and simulations of playing matches of Mario Kart to 
        learn what output it should provide as input for the game.
        After the training is done, we will host an event allowing our members to try to compete against the 
        AI and have fun testing to see whether the AI is better than humans at the game.
      </p>
    </>
  );
}

export default App;
