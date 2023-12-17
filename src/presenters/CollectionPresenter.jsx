import CollectionView from "../views/collectionView";
import { observer } from "mobx-react-lite";


export default
observer(            
function CollectionPresenter(props){ 

  const userName = props.model.user ? user.displayName : 'Guest';

  const usersPersonalCollectionCB = () => {
    props.model.getUserPokemonCollection();
  }

  return <CollectionView user={userName} collection={usersPersonalCollectionCB}/>;

}
);
