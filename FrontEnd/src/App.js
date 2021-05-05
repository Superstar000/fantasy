import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {useParams} from "react-router"
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { setCurrentAdmin, logoutAdmin } from "./actions/adminAuthAction";
import { Provider } from "react-redux";
import store from "./store";
// fantasy
import FantasyHome from "./components/layout/FantasyHome";
import FantasyPoints from "./components/layout/FantasyPoints";
import FantasyFaq from "./components/layout/FantasyFaq";
import FantasyHelp from "./components/layout/FantasyHelp";
import FantasyRules from "./components/layout/FantasyRules";
import FantasyPrizes from "./components/layout/FantasyPrizes";
import FantasyWinners from "./components/layout/FantasyWinners";
import FantasyScouts from "./components/layout/FantasyScouts";
import FantasyStats from "./components/layout/FantasyStats";
import FantasyFixtures from "./components/layout/FantasyFixtures";
import FantasyStatus from "./components/layout/FantasyStatus";
import FantasyPickteam from "./components/layout/FantasyPickteam";
import FantasyTransfer from "./components/layout/FantasyTransfer";
import FantasyLeagues from "./components/layout/FantasyLeagues";
//scout
import ScoutSetPieces from "./components/layout/ScoutSetPieces";
import ScoutPlayer from "./components/layout/ScoutPlayer";

// premier League
import PremierStatus from "./components/layout/FantasyStatus";
import PremierClubs from "./components/layout/PremierClubs";
import PremierFixtures from "./components/layout/PremierFixtures";
import PremierManagers from "./components/layout/PremierManagers";
import PremierPlayers from "./components/layout/PremierPlayers";
import PremierReferees from "./components/layout/PremierReferees";
import PremierResults from "./components/layout/PremierResults";
import PremierTables from "./components/layout/PremierTables";
import PremierNews from "./components/layout/PremierNews";
import PremierSocial from "./components/layout/PremierSocial";
import PremierYouth from "./components/layout/PremierYouth";
import PremierBroadcast from "./components/layout/PremierBroadcast";
import PremierSafeguarding from "./components/layout/PremierSafeguarding";
import PremierTickets from "./components/layout/PremierTickets";
import PremierHome from "./components/layout/PremierHome";
// Video
import VideoDashboard from "./components/layout/VideoDashboard";
import VideoFantasy from "./components/layout/VideoFantasy";
import VideoAll from "./components/layout/VideoAll";
import VideoPlaylists from "./components/layout/VideoPlaylists";
//communities
import Comlatest from "./components/layout/Comlatest";
import ComStrategy from "./components/layout/ComStrategy";
import Comprogrammes from "./components/layout/Comprogrammes";
import Comfacilities from "./components/layout/Comfacilities";
import Complcharifund from "./components/layout/Complcharifund";
import FantasydraftHome from "./components/layout/FantasydraftHome";
import Register from "./components/layout/RegisterHome";
import Register1 from "./components/layout/RegisterHome1";
import Register2 from "./components/layout/RegisterHome2";
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
import Login from "./components/layout/LoginHome";



import "./App.css";
import "./Imagezoom.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  const plan = localStorage.plan;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  store.dispatch({type: 'SET_PLAN_WITH_CARD', payload: plan});
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

if (localStorage.adminjwtToken) {
  // Set auth token header auth
  const token = localStorage.adminjwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentAdmin(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutAdmin());

    // Redirect to login
    window.location.href = ".admin/login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            {/* <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} /> */}
            <Switch>
              {/* <Route exact path="/" component={Landing} /> */}
              <Route exact path="/" component={FantasyHome} />
              <Route exact path="/register" component={Register} />             
              <Route exact path="/registerfav" component={Register1} />             
              <Route exact path="/registerend" component={Register2} />             
              <Route exact path="/login" component={Login} />
               {/* fantasy */}
              <Route exact path="/fantasy" component={FantasyHome} />
              <Route exact path="/fantasypoints" component={FantasyPoints} />
              <Route exact path="/fantasyprizes" component={FantasyPrizes} />
              <Route exact path="/fantasywinners" component={FantasyWinners} />
              <Route exact path="/fantasyscouts" component={FantasyScouts} />
              <Route exact path="/fantasystats" component={FantasyStats} />
              <Route exact path="/fantasyhelp" component={FantasyHelp} />
              <Route exact path="/fantasyrules" component={FantasyRules} />
              <Route exact path="/fantasyfaq" component={FantasyFaq} />
              <Route exact path="/fantasystatus" component={FantasyStatus} />
              <Route exact path="/fantasypickteam" component={FantasyPickteam} />
              <Route exact path="/fantasytransfer" component={FantasyTransfer} />
              <Route exact path="/fantasyleagues" component={FantasyLeagues} />
              <Route exact path="/fantasyfixtures" component={FantasyFixtures} />
              {/*scout  */}
              <Route exact path="/scoutsetpieces" component={ScoutSetPieces} />
              <Route exact path="/scoutplayer" component={ScoutPlayer} />
              {/* premire league */}
              <Route exact path="/premierstatus" component={PremierStatus} />
              <Route exact path="/premierclubs" component={PremierClubs} />
              <Route exact path="/premierfixtures" component={PremierFixtures} />
              <Route exact path="/premiermanagers" component={PremierManagers} />
              <Route exact path="/premierplayers" component={PremierPlayers} />
              <Route exact path="/premierreferees" component={PremierReferees} />
              <Route exact path="/premierresults" component={PremierResults} />
              <Route exact path="/premiertables" component={PremierTables} />
              <Route exact path="/premiernews" component={PremierNews} />
              <Route exact path="/premiersocial" component={PremierSocial} />
              <Route exact path="/premieryouth" component={PremierYouth} />
              <Route exact path="/premierbroadcast" component={PremierBroadcast} />
              <Route exact path="/premiersafeguarding" component={PremierSafeguarding} />
              <Route exact path="/premiertickets" component={PremierTickets} />
              <Route exact path="/premierhome" component={PremierHome} />
               {/* video */}
              <Route exact path="/videodashboard" component={VideoDashboard} />
              <Route exact path="/videofantasy" component={VideoFantasy} />
              <Route exact path="/videoall" component={VideoAll} />
              <Route exact path="/videoplaylists" component={VideoPlaylists} />
              {/* communitics */}
              <Route exact path="/communities" component={Comlatest} />
              <Route exact path="/communities/strategy" component={ComStrategy} />
              <Route exact path="/communities/programmes" component={Comprogrammes} />
              <Route exact path="/communities/facilities" component={Comfacilities} />
              <Route exact path="/communities/plcharifund" component={Complcharifund} />

              <Route exact path="/fantasydraft" component={FantasydraftHome} />
            </Switch>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}
export default App;
