import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, DrinksByCategory, Drink } from "../pages";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/drinks" component={DrinksByCategory} />
      <Route path="/drink/:idDrink" component={Drink} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
