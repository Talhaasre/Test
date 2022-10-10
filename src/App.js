import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={ContactUs} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
