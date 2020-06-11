import React from "react";
import Layout from "./components/layout/Layout";
import "./App.css";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

function App() {
  return (
    <Layout>
      <h1>Burger Assembler</h1>
      <BurgerBuilder />
    </Layout>
  );
}

export default App;
