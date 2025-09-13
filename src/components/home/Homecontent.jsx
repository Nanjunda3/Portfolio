import React, {useEffect, useState} from "react";
import "../../cssfiles/about.css";
import {Typewriter} from "react-simple-typewriter";
// import Lottie from "lottie-react";
import html from "../../skills/html.svg";
import react from "../../skills/reactjs.svg";
import css from "../../skills/css.svg";
import javascript from "../../skills/javascript.svg";
import java from "../../skills/java.svg";
import node from "../../skills/nodejs.svg";
import mysql from "../../skills/mysql.svg";
import mongodb from "../../skills/mongodb.svg";
import firebase from "../../skills/firebase.svg";
import github from "../../skills/github.svg";
import vscode from "../../skills/vscode.svg";
import notion from "../../skills/notion.svg";
import windows from "../../skills/windows.svg";
import linux from "../../skills/linux.svg";

const skills = [
  {name: "React", image: react},
  {name: "HTML", image: html},
  {name: "CSS", image: css},
  {name: "Javascript", image: javascript},
  {name: "Java", image: java},
  {name: "Node JS", image: node},
  {name: "MySQL", image: mysql},
  {name: "Mongo DB", image: mongodb},
  {name: "Firebase", image: firebase},
  {name: "GitHub", image: github},
  {name: "VS Code", image: vscode},
  {name: "Notion", image: notion},
  {name: "Windows", image: windows},
  {name: "Linux", image: linux},
];

function Homecontent() {
  const [startTyping, setStartTyping] = useState(false);
  const [show, setShow]= useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="aboutmain">
      <div className="about">
        <div className="imagecontainer">
          <img src="/about/sanjay1.jpg" alt="sanjay" />
        </div>
        <div className="aboutcontent">
          <p>
            {" "}
            {startTyping && (
              <Typewriter
                words={[
                  "I am Sanjay K S, a dedicated Full Stack Developer with a strong foundation in modern web technologies and a proven track record of delivering high-impact digital solutions. With experience in both product-based and client-focused environments, I have developed scalable, responsive, and user-centric web applications using React.js, Node.js, and CSS3.",
                ]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            )}
          </p>
        </div>
      </div>
      <div className="aboutcontent2">
        <p>
          During my tenure at BHT Technologies, I played a key role in
          developing dynamic platforms such as the Interactive Floor SaaS
          solution and contributed to high-profile projects like the Global
          Investor's Meet initiative and Gourmet Luxe 2023. My freelance work,
          including the Urbanrise and Spaceman Design websites, showcases my
          ability to create optimized,{show ? ( <span>"SEO-friendly interfaces that drive
          engagement and lead generation.
            <br></br><br></br>
          Currently, I am working as a Technical Associate at TTEC, where I
          provide real-time technical support and troubleshooting to global
          clients. My role involves diagnosing and resolving technical issues
          efficiently, improving customer satisfaction, and contributing to
          process improvements by identifying recurring issues and suggesting
          automation or knowledge base enhancements. This experience has
          strengthened my problem-solving abilities, multitasking skills, and
          communication expertise in a fast-paced environment.
        <br></br> <br></br>
          I bring to the table strong problem-solving skills, adaptability, and
          a collaborative mindset. My commitment to continuous learning and
          delivering efficient, quality-driven results makes me a valuable asset
          to any forward-thinking development team.</span> ): "SEO-friendly..." }
          <button style={{color: "#3b82f6"}} onClick={()=> setShow(!show)}>{show ? "Show less": "Read more"}</button>
        </p>
        
      </div>
      <div className="heading">
      <h1>Skills & IDE</h1>
      </div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.image} alt={skill.name} />
            <p className="skillsname">  {skill.name}</p>
          </div>
        ))}
      </div>
      </div>
  );
}

export default Homecontent;
