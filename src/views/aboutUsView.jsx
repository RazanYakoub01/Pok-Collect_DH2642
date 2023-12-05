import React from 'react';
import "/src/aboutUs.css";
import { Link } from 'react-router-dom';
import temp1 from '/src/aboutUsImages/temp1.png';
import temp2 from '/src/aboutUsImages/temp2.jpg';


const AboutUsView = () => {
  return (
    <div className='full-screen bg-about'>
      <h1>About Us</h1>
      <p>If you are intrested and want to learn more about our project, please visit our git-repository:</p>
      <a href="https://github.com/RazanYakoub01/PokeCollect_DH2642">
        GitHub
      </a>
      <h2>Contributors:</h2>
      <div className="contributor">
      <img src={temp1}/>
      <p>email, program, what I want to learn</p>
      </div>
      <div className="contributor">
      <img src={temp1}/>
      <p>email, program, what I want to learn</p>
      </div>
      <div className="contributor">
      <img src={temp2}/>
      <p>email, program, what I want to learn</p>
      </div>
      <div className="contributor">
      <img src={temp2}/>
      <p>email, program, what I want to learn</p>
      </div>
    </div>
  );
};

export default AboutUsView;