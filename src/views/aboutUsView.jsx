import React from 'react';
import "/src/aboutUs.css";
import "/src/textFonts.css";
import tiImage from "/src/aboutUsImages/ti.jpg";

const AboutUsView = ({ memberArray }) => {
  return (
    <div className="flex-row-homepage">
      <div className="flex-column-aboutus">
        <div className="flex-row">
          <img src={tiImage} alt="PokeCollect Logo" className="logo-image" />
          <h1 className="App-name">About us</h1>
        </div>
        <div className="description-font-20px">
          Welcome to PokeCollect, where our passion for Pokémon comes to life in the digital realm! Our journey began with a simple yet profound goal: to create an interactive online space that celebrates the enchanting world of Pokémon.
        </div>

        <a style={{ fontSize: "2vw" }} href="https://github.com/RazanYakoub01/PokeCollect_DH2642">GitHub</a>

        <h1 className="meet-the-team">MEET THE TEAM</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vw" }}>
          {memberArray.map((member, index) => {
            return (
              <div key={index} className="flex-row-profile square-profile">
                <span className="flex-column-profile">
                  <img className="profile-image" src={member.img} height={200} alt={`${member.name} ${member.surname}`} />
                  <h1 className="profile-name"> {member.name}</h1>
                  <h1 className="profile-name"> {member.surname}</h1>
                  <h1 className="profile-email">{member.email}</h1>
                  <a className="profile-email" href={member.linkedIn}>My LinkedIn</a>
                </span>
                <span className="more-about-member">
                   <p className="profile-bold">Program:</p>
                   <p className="description-font-20px-profile">{member.program}</p>
                  <br />
                <br />
                <p className="profile-bold">Learning Objectives: </p>
                <ul className="LO-list">
                  <li>{member.LO1}</li>
                  <li>{member.LO2}</li>
                </ul>
              </span>

              </div>
            )
          })}
        </div>
      </div>
      <div className="grarphic-background"></div>
    </div>
  );
};

export default AboutUsView;
