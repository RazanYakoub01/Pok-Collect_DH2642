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
      LO1: "",
      LO2: "",
    },
    {
      img: boyImage,
      name: "Alex", 
      surname: "Barhado", 
      email: "abarhado@kth.se", 
      linkedIn: "https://www.linkedin.com/in/alexbartlow/",
      program: "Computer Science ",
      LO1: "",
      LO2: "",
    },
    {
      img: razanImage,
      name: "Razan", 
      surname: "Yakoub", 
      email: "razany@kth.se", 
      linkedIn: "https://www.linkedin.com/in/razan-yakoub-8a86002a3/",
      program: "Computer Science ",
      LO1: "",
      LO2: "",
    },
    {
      img: boyImage,
      name: " Elias", 
      surname: "Amani", 
      email: "eliar@kth.se", 
      linkedIn: "https://www.linkedin.com/in/amani-elias-4382128a/",
      program: "Computer Science ",
      LO1: "",
      LO2: "",
    },
  ];

  return <AboutUsView memberArray={memberArray} />;
});
