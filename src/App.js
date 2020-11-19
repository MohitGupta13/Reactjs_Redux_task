import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import HobbySelectorCheck from "./components/HobbySelectorCheck";
/*import CustomerList from "./components/CustomerList";*/
let App = () => {

    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <a href="/" className="navbar-brand">React Redux -Checkbox Application</a>
            </nav>
            <Provider store={store}>
                <HobbySelectorCheck/>
            </Provider>

         <div style={{marginBottom : '200px'}}/>
        </React.Fragment>
    );
};
export default App;
