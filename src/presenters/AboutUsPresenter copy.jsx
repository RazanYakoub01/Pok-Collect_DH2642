import DetailsView from '../views/detailsView.jsx';
import { observer } from "mobx-react-lite";


export default
observer(            
function DetailsPresenter(props){ 
  return <DetailsView />;

}
);
