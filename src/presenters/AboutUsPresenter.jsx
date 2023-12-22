import AboutUsView from '../views/aboutUsView.jsx';
import { observer } from "mobx-react-lite";
import razanImage from  "/src/assets/aboutUsImages/razan.jpg";
import seemaImage from "/src/assets/aboutUsImages/seema.jpg";
import boyImage from "/src/assets/aboutUsImages/temp1.png";
export default observer(function AboutUsPresenter(props) {
  const memberArray = [
    {
      img: seemaImage,
      name: "Seema", 
      surname: "Bashir", 
      email: "sfbashir@kth.se", 
      linkedIn: "https://www.linkedin.com/in/seema-bashir-a2b10b214/",
      program: "Computer Science",
      LO1: " This project has proven to be an excellent avenue for enhancing my proficiency in React. ",
      LO2: " Moreover, it has provided me with valuable insights into crafting a compelling user experience.",
    },
    {
      img: boyImage,
      name: "Alex", 
      surname: "Barhado", 
      email: "abarhado@kth.se", 
      linkedIn: "https://www.linkedin.com/in/alexbartlow/",
      program: "Computer Science ",
      LO1: "I was motivated to enhance my frontend skills and acquire new methods for structuring and writing maintainable code. ",
      LO2: " Furthermore, I sought to broaden my experience by working with APIs and delving into the backend aspects of development.",
    },
    {
      img: razanImage,
      name: "Razan", 
      surname: "Yakoub", 
      email: "razany@kth.se", 
      linkedIn: "https://www.linkedin.com/in/razan-yakoub-8a86002a3/",
      program: "Computer Science ",
      LO1: " I was excited about learning how to craft an enjoyable user experience through interface design in a specific field. ",
      LO2: " Furthermore, it has enriched my understanding of the principles behind crafting an immersive user interaction.",
    },
    {
      img: boyImage,
      name: " Elias", 
      surname: "Amani", 
      email: "eliar@kth.se", 
      linkedIn: "https://www.linkedin.com/in/amani-elias-4382128a/",
      program: "Computer Science ",
      LO1: "I enthusiastically embarked on a journey to explore React, aiming to elevate my skills in creating sophisticated user interfaces.",
      LO2: " I've learned that combining thoughtful user design with effective API integration enhances both the look and functionality of our projects.",
    },
  ];

  return <AboutUsView memberArray={memberArray} />;
});
