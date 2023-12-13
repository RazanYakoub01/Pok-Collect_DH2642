import AboutUsView from '../views/aboutUsView.jsx';
import { observer } from "mobx-react-lite";

export default observer(function AboutUsPresenter(props) {
  const memberArray = [
    {
      img: "Seema.png",
      name: "Seema", 
      surname: "Bashir", 
      email: "sfbashir@kth.se", 
      linkedIn: "https://www.linkedin.com/in/seema-bashir-a2b10b214/",
      program: "Computer Science",
      LO1: "I think this project has been a great way to improve my knowledge in React",
      LO2: "Furthermore, I've learnt a lot about how to create a nice user experience!",
    },
    {
      img: "Alex.png",
      name: "Alex", 
      surname: "Barhado", 
      email: "XX", 
      linkedIn: "X",
      program: "Computer Science ",
      LO1: "X",
      LO2: "X",
    },
    {
      img: "Razan.png",
      name: "Razan", 
      surname: "Yakoub", 
      email: "XX", 
      linkedIn: "X",
      program: "Computer Science ",
      LO1: "X",
      LO2: "X",
    },
    {
      img: "Elias.png",
      name: "Amani", 
      surname: "Barhado", 
      email: "XX", 
      linkedIn: "X",
      program: "Computer Science ",
      LO1: "X",
      LO2: "X",
    },
  ];

  return <AboutUsView memberArray={memberArray} />;
});
