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
      LO1: "I think this project has been a great way to learn how to listen to Elias!",
      LO2: "Furthermore, I've learnt a lot about how to create a nice user experience from Elias!",
    },
    {
      img: boyImage,
      name: "Alex", 
      surname: "Barhado", 
      email: "abarhado@kth.se", 
      linkedIn: "https://www.linkedin.com/in/alexbartlow/",
      program: "Computer Science ",
      LO1: "Elias taught me that we should not have a cart!",
      LO2: "amaaaaazing",
    },
    {
      img: razanImage,
      name: "Razan", 
      surname: "Yakoub", 
      email: "razany@kth.se", 
      linkedIn: "https://www.linkedin.com/in/razan-yakoub-8a86002a3/",
      program: "Computer Science ",
      LO1: "This project helped me realize Elias is the best and we should always listen to him!",
      LO2: "He is amazing, he helps me solve all the errors I have!!!",
    },
    {
      img: boyImage,
      name: " Elias", 
      surname: "Amani", 
      email: "eliar@kth.se", 
      linkedIn: "https://www.linkedin.com/in/amani-elias-4382128a/",
      program: "Computer Science ",
      LO1: "I love myself, and I think this porject has helped me showcase my love to myself and my leadership abilities",
      LO2: "Amazing leader/. 10/10",
    },
  ];

  return <AboutUsView memberArray={memberArray} />;
});
