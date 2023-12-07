import AboutUsView from '../views/aboutUsView.jsx';
import { observer } from "mobx-react-lite";


export default
observer(            
function AboutUsPresenter(props){ 
  return <AboutUsView />;

}
);
