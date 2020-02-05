import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import CreateCamp from "./components/CreateCamp";
import UserSignUp from "./components/UserSignUp";
import OrgSignUp from "./components/OrgSignUp";
import UpdateCampaign from "./components/UpdateCampaign";
import UserOrg from "./components/UserOrg";
import Navigation from "./components/Navigation";
import CampaignList from "./components/CampaignList";
import Campaign from "./components/Campaign";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={CampaignList}/>

        <Route path="/campaign/:id"
          render={props => {
            return <Campaign {...props} />;
          }}
          />
        <Route path="/update-campaign/:id" component={UpdateCampaign} />
        <Route path="/new-campaign" component={CreateCamp} />

        <Route path="/sign-up" component={UserSignUp} />
        <Route path="/org-signup" component={OrgSignUp} />
        <Route path="/user-or-org" component={UserOrg} />
      </div>
    </Router>
  );
}

export default App;