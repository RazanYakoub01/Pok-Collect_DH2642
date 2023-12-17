import CollectionView from "../views/collectionView";
import { observer } from "mobx-react-lite";
import { useAuthentication } from '../services/authService';


export default
observer(            
function CollectionPresenter(props){ 

  const { user } = useAuthentication();
  const userName = user ? user.displayName : 'Guest';
  const usersPersonalCollectionCB =  props.model.getUserPokemonCollection();
  
  return <CollectionView user={userName} collection={usersPersonalCollectionCB}/>;

}
);
