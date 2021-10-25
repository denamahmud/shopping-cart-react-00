import React, {Component} from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ProfileUse from "./pages/ProfileUse";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Details from "./pages/Details";

class App extends Component{


    render(){

        return(

            <BrowserRouter>
                <div className="App">
                   <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/details/:id" component={Details}/>
                        <Route path="/profile-user" component={ProfileUse}/>
                   </Switch>
            
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
