import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home_Files/Home";
import Login from "./components/Login_Files/Login";
// import Error from "./components/Error";
import About from "./components/About_Files/About";
// import Userinfo from "./components/Userinfo";
import Register from "./components/Register_Files/Register";
// import FetchingData from "./components/FetchingData";


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        {/* <Route exact path="/login/userinfo" component={Userinfo} />
        <Route path="/fetch" component={FetchingData} /> */}
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
