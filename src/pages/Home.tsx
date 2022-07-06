import React from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from '../contexts/Context';
import { SignUp } from "./SignUp";;

export const Home = () => {
    return (
      <ContextProvider>
        <div>
            <div className="title1"><h1>Home</h1></div>
            <h1>Título da Página</h1>
            <button><Link to="/SignUp">Ir para SignUp</Link></button>
            <button><Link to="/ShowData">Ir para ShowData</Link></button>
          </div>
      </ContextProvider>         
    );
}