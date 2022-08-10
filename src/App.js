import React, {Component} from "react"
import { Route, HashRouter, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

class App extends Component{


    render(){

        return(

          
            <HashRouter>
          
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/cart" component={Cart}/>
                    <Route exact path="/products" component={Products}/>
                    <Route path="/products/:id" component={Details}/>
                </Switch>
                        
            
                        
                
                <Footer/>
            </div>
                    </HashRouter>
        )
    }
}

export default App;
