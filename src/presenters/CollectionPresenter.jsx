import CollectionView from "../views/collectionView";
import { observer } from "mobx-react-lite";


export default
observer(            
function CollectionPresenter(props){ 

  const userName = props.model.user.displayName;

  const usersPersonalCollectionCB =  props.model.getCollection();


  return <CollectionView user={userName} collection={usersPersonalCollectionCB}/>;

}
);
