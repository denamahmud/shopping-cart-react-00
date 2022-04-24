import React, {Component} from "react"
import { HashRouter , Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProfileUse from "./pages/ProfileUse";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Products from "./components/Products";

class App extends Component{


    render(){

        return(

         
            <HashRouter>
                <div className="App">
                    <Routes>
                        <Route path="/" component={Home} exact/>
                        <Route path="/about" component={About}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/products" component={Products} exact/>
                        <Route path="/products/:id" component={Details}/>
                        <Route path="/profile-user" component={ProfileUse}/>
                    </Routes>
                    <Footer/>
                </div>
            </HashRouter>
        )
    }
}

export default App;
