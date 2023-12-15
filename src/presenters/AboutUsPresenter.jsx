import AboutUsView from '../views/aboutUsView.jsx';
import { observer } from "mobx-react-lite";
import razanImage from  "/src/aboutUsImages/razan.jpg";
import seemaImage from "/src/aboutUsImages/seema.jpg";
import boyImage from "/src/aboutUsImages/temp1.png";
export default observer(function AboutUsPresenter(props) {
  const memberArray = [
    {
      img: seemaImage,
      name: "Seema", 
      surname: "Bashir", 
      email: "sfbashir@kth.se", 
      linkedIn: "https://www.linkedin.com/in/seema-bashir-a2b10b214/",
      program: "Computer Science",
      LO1: "I think this project has been a great way to improve my knowledge in React",
      LO2: "Furthermore, I've learnt a lot about how to create a nice user experience!",
    },
    {
      img: boyImage,
      name: "Alex", 
      surname: "Barhado", 
      email: "abarhado@kth.se", 
      linkedIn: "https://www.linkedin.com/in/alexbartlow/",
      program: "Computer Science ",
      LO1: "Love herrrr",
      LO2: "amaaaaazing",
    },
    {
      img: razanImage,
      name: "Razan", 
      surname: "Yakoub", 
      email: "razany@kth.se", 
      linkedIn: "https://www.linkedin.com/in/razan-yakoub-8a86002a3/",
      program: "Computer Science ",
      LO1: "I love Seema, and I think this porject has helped me showcase my love to her",
      LO2: "She is amazing",
    },
    {
      img: boyImage,
      name: " Elias", 
      surname: "Amani", 
      email: "eliar@kth.se", 
      linkedIn: "https://www.linkedin.com/in/amani-elias-4382128a/",
      program: "Computer Science ",
      LO1: "I love Seema, and I think this porject has helped me showcase my love to her",
      LO2: "Amaxing girl/. 10/10",
    },
  ];

  return <AboutUsView memberArray={memberArray} />;
});
