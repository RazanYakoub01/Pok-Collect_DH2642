// src/presenters/HomePresenter.jsx
import AboutUsView from '../views/aboutUsView.jsx';
import { observer } from "mobx-react-lite";


export default
observer(             // needed for the presenter to update (its view) when relevant parts of the model change
function AboutUsPresenter(props){ 
  return <AboutUsView /* data={homeData}  *//>;

}
);
