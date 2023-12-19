import OpenCardsView from '../views/openCardsView.jsx';
import { observer } from "mobx-react-lite";
import { useNavigate } from 'react-router-dom';

export default observer(function OpenCardsPresenter(props){

  const obtainedPokemon = props.model.openPackPromiseState.data;

  const navigate = useNavigate();

  function handleCollectionClick(){
    navigate('/collection');
  }
  
  
  
  return <OpenCardsView obtainedPokemon={obtainedPokemon} onCollectionClick={handleCollectionClick}/>;

}
);
