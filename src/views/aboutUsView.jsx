import React from 'react';
import "/src/aboutUs.css";
import "/src/textFonts.css";
import temp1 from '/src/aboutUsImages/temp1.png';
import temp2 from '/src/aboutUsImages/temp2.jpg';
import ti from '/src/aboutUsImages/ti.jpg';


const AboutUsView = () => {
  return (
    <div>
      <div className="titleContainer">
      <img src={ti} alt="Title Image" />
      <h1 className="titleFont">About Us</h1>
      </div>
      <p>If you are intrested and want to learn more about our project, please visit our git-repository:</p>
      <a href="https://github.com/RazanYakoub01/PokeCollect_DH2642">
        GitHub
      </a>
      <h2>Contributors:</h2>
      <div className="contributor">
      <img src={temp1}/>
      <div>email, program, what I want to learn, favourite pokemon</div>
      </div>
      <div className="contributor">
      <img src={temp1}/>
      <div>email, program, what I want to learn, favourite pokemon</div>
      </div>
      <div className="contributor">
      <img src={temp2}/>
      <div>email, program, what I want to learn, favourite pokemon</div>
      </div>
      <div className="contributor">
      <img src={temp2}/>
      <div>email, program, what I want to learn, favourite pokemon</div>
      </div>
    </div>
  );
};

export default AboutUsView;