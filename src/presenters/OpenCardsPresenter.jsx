import OpenCardsView from '../views/openCardsView.jsx';
import { observer } from "mobx-react-lite";

export default observer(function OpenCardsPresenter(props){

  const obtainedPokemon = props.model.openPackPromiseState.data;
  
  return <OpenCardsView obtainedPokemon={obtainedPokemon}/>;

}
);
