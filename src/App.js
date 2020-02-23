import React from 'react';
import Layout from "./components/layout/index"
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../src/components/pages/home/index"
import Analytics from "../src/components/pages/analytics/index"
import Users from "../src/components/pages/users/index"
import Settings from "../src/components/pages/settings/index"
import "./global.css"

function App() {
  return (
    
      <div className="App">
        <Layout>
          <Route path="/home" component={Home} />
          <Route path="/Analytics" component={Analytics} />
          <Route path="/Users" component={Users} />
          <Route path="/Settings" component={Settings} />
          
        </Layout>
      </div>
    
  );
}

export default App;
