import React from 'react';
import Layout from "./components/layout/index"
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../src/components/pages/home/index"
import Crime from "./components/pages/crime/index"
import Deaths from "../src/components/pages/deaths/index"
import Settings from "../src/components/pages/settings/index"
import "./global.css"

function App() {
  return (
    
      <div className="App">
        <Layout>
          <Route path="/home" component={Home} />
          <Route path="/crime" component={Crime} />
          <Route path="/deaths" component={Deaths} />
          <Route path="/settings" component={Settings} />
          
        </Layout>
      </div>
    
  );
}

export default App;
