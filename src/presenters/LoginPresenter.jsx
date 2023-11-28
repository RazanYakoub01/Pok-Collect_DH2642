import LoginView from '../views/loginView.jsx';
import { observer } from "mobx-react-lite";


export default
observer(             
function LoginPresenter(props){ 
  return <LoginView /* data={homeData}  *//>;

}
);
