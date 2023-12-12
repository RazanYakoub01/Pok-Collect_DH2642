import OpenCardsView from '../views/aboutUsView.jsx';
import { observer } from "mobx-react-lite";


export default
observer(            
function OpenCardsPresenter(props){

  return <OpenCardsView />;

}
);
