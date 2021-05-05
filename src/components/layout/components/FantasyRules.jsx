import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import MuiCardActions from "@material-ui/core/CardActions";
import MuiButton from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import Socialbar from "./subcomponent/socialbar";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const Button = withStyles((theme) => ({
  root: {
    padding: "10px 40px",
    fontSize: "1rem",
    [theme.breakpoints.up("lg")]: {
      padding: "10px 40px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "4px 10px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 30px",
    },
  },
}))(MuiButton);

const CardActions = withStyles((theme) => ({
  root: {
    padding: "10px",
    [theme.breakpoints.up("lg")]: {
      padding: "14px 25px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "15px 25px ",
    },
  },
}))(MuiCardActions);

export default function FantasyHome(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.container} id="buy-space">
      <h2 className={classes.title}></h2>

      <div className="col-md-12 col-sm-12">
        <h2 style={{ color: "white", textAlign: "left", paddingLeft: "100px" }}>
          Rules
        </h2>
      </div>
      <div className="col-md-12 col-sm-12" style={{ padding: "0 5%" }}>
        <div className="col-md-6 col-sm-6">
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    Selecting Your Initial Squad
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <div className="fantasy-rules-head-1">Squad Size</div>
                    <div>
                      {" "}
                      To join the game select a fantasy football squad of 15
                      players, consisting of:
                    </div>
                    <div>
                      {" "}
                      <ul>
                        <li>2 Goalkeepers</li>
                        <li> 5 Defenders </li>
                        <li>5 Midfielders </li>
                        <li>3 Forwards</li>
                      </ul>
                    </div>
                    <div className="fantasy-rules-head-1"> Budget </div>
                    <div>
                      The total value of your initial squad must not exceed £100
                      million.
                    </div>
                    <div className="fantasy-rules-head-1">
                      Players Per Team{" "}
                    </div>
                    <div>
                      You can select up to 3 players from a single Premier
                      League team.
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">Manageing your squad</p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <div className="fantasy-rules-head-1">
                      Choosing Your Starting 11
                    </div>
                    <div>
                      From your 15 player squad, select 11 players by the
                      Gameweek deadline to form your team. All your points for
                      the Gameweek will be scored by these 11 players, however
                      if one or more doesn't play they may be automatically
                      substituted. Your team can play in any formation providing
                      that 1 goalkeeper, at least 3 defenders and at least 1
                      forward are selected at all times.
                    </div>
                    <div className="fantasy-rules-head-1">
                      Selecting a Captain and a Vice-Captain
                    </div>
                    <div>
                      {" "}
                      From your starting 11 you nominate a captain and a
                      vice-captain. Your captain's score will be doubled. If
                      your captain plays 0 minutes in the Gameweek, the captain
                      will be changed to the vice-captain. If both captain and
                      vice-captain play 0 minutes in a Gameweek, then no
                      player's score will be doubled.
                    </div>
                    <div className="fantasy-rules-head-1">
                      {" "}
                      Prioritising Your Bench For Automatic Substitutions
                    </div>
                    <div>
                      Your substitutes provide cover for unforeseen events like
                      injuries and postponements by automatically replacing
                      starting players who don't play in a Gameweek.
                    </div>
                    <div>
                      Playing in a Gameweek means playing at least 1 minute or
                      receiving a yellow / red card.
                    </div>
                    <div>
                      Based on the priorities you assign, automatic
                      substitutions are processed at the end of the Gameweek as
                      follows:
                    </div>
                    <div>
                      <ul>
                        <li>
                          If your Goalkeeper doesn't play in the Gameweek, he
                          will be substituted by your replacement Goalkeeper, if
                          he played in the Gameweek.
                        </li>
                        <li>
                          {" "}
                          If any of your outfield players don't play in the
                          Gameweek, they will be substituted by the highest
                          priority outfield substitute who played in the
                          Gameweek and doesn't break the formation rules (eg. If
                          your starting team has 3 defenders, a defender can
                          only be replaced by another defender).
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">Transfers</p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <div>
                      After selecting your squad you can buy and sell players in
                      the transfer market. Unlimited transfers can be made at no
                      cost until your first deadline.
                    </div>
                    <div>
                      After your first deadline you will receive 1 free transfer
                      each Gameweek. Each additional transfer you make in the
                      same Gameweek will deduct 4 points from your total score
                      (Classic scoring) and match score (Head-to-Head scoring)
                      at the start of the next Gameweek.
                    </div>
                    <div>
                      If you do not use your free transfer, you are able to make
                      an additional free transfer the following Gameweek. If you
                      do not use this saved free transfer in the following
                      Gameweek, it will be carried over until you do. You can
                      never have more than 1 saved transfer.
                    </div>
                    <div className="fantasy-rules-head-1">Wildcards</div>
                    <div>
                      {" "}
                      For information on wildcards please refer to the chips
                      section of the rules.
                    </div>
                    <div className="fantasy-rules-head-1">Player Prices</div>
                    <div>
                      Player prices change during the season dependent on the
                      popularity of the player in the transfer market. Player
                      prices do not change until the season starts.
                    </div>
                    <div>
                      The price shown on your transfers page is a player's
                      selling price. This selling price may be less than the
                      player's current purchase price as a sell-on fee of 50%
                      (rounded up to the nearest £0.1m) will be applied on any
                      profits made on that player.
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head"> Chips</p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <div>
                      Chips can be used to potentially enhance your team's
                      performance during the season.
                    </div>
                    <div>
                      {" "}
                      Only one chip can be played in a single Gameweek. The
                      chips available are as follows:
                    </div>
                    <div>
                      <table>
                        <tr>
                          <td> Name</td>
                          <td>Effect</td>
                        </tr>
                        <tr>
                          <td> Benc Boost</td>
                          <td>
                            The points scored by your bench players in the next
                            Gameweek are included in your total.{" "}
                          </td>
                        </tr>
                        <tr>
                          <td> Free Hit</td>
                          <td>
                            {" "}
                            Make unlimited free transfers for a single Gameweek.
                            At the next deadline your squad is returned to how
                            it was at the start of the Gameweek.{" "}
                          </td>
                        </tr>
                        <tr>
                          <td> Triple Captain</td>
                          <td>
                            Your captain points are tripled instead of doubled
                            in the next Gameweek.{" "}
                          </td>
                        </tr>
                        <tr>
                          <td> Wildcard All</td>
                          <td>
                            transfers (including those already made) in the
                            Gameweek are free of charge.{" "}
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div>
                      The Bench Boost and Triple Captain chips can each be used
                      once a season and are played when saving your team on the
                      my team page. They can be cancelled at anytime before the
                      Gameweek deadline.
                    </div>
                    <div>
                      The Free Hit chip can be used once a season, is played
                      when confirming your transfers and can't be cancelled
                      after confirmed.
                    </div>
                    <div>
                      {" "}
                      The Wildcard chip can be used twice a season. The first
                      wildcard will be available from the start of the season
                      until Mon 28 Dec 23:30. The second wildcard will be
                      available after this date in readiness for the January
                      transfer window opening and remain available until the end
                      of the season. The Wildcard chip is played when confirming
                      transfers that cost points and can't be cancelled once
                      played.
                    </div>
                    <div>
                      {" "}
                      Please note that when playing either a Wildcard or your
                      Free Hit chip, any saved free transfers will be lost. You
                      will be back to the usual 1 free transfer the following
                      Gameweek.
                    </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
        </div>
        <div className="col-md-6 col-sm-6">       

          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">Deadlines</p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                  <div>
                    All changes to your team (starting 11, transfers, captain
                    changes, substitiution priorities) must be made by the
                    Gameweek deadline in order to take effect for that set of
                    matches.
                  </div>
                  <div>
                    Deadlines are subject to change and will be 90 minutes
                    before the kick-off time in the first match of the Gameweek.
                  </div>
                  <table>
                    <tr>
                      <td>Gameweek</td>
                      <td>Deadline</td>
                    </tr>
                    <tr>
                      <td>Gameweek 1</td>
                      <td>Sat 12 Sep 20:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 2</td>
                      <td>Sat 19 Sep 20:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 3</td>
                      <td>Sat 26 Sep 20:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 4</td>
                      <td>Sat 3 Oct 20:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 5</td>
                      <td>Sat 17 Oct 20:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 6</td>
                      <td>Sat 24 Oct 03:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 7</td>
                      <td>Sat 31 Oct 04:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 8</td>
                      <td>Sat 7 Nov 02:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 9</td>
                      <td>Sat 21 Nov 21:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 10</td>
                      <td>Sat 28 Nov 04:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 11</td>
                      <td>Sat 5 Dec 21:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 12</td>
                      <td>Sat 12 Dec 04:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 13</td>
                      <td>Wed 16 Dec 02:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 14</td>
                      <td>Sat 19 Dec 21:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 15</td>
                      <td>Sat 26 Dec 21:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 16</td>
                      <td>Mon 28 Dec 23:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 17</td>
                      <td>Sat 2 Jan 02:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 18</td>
                      <td>Wed 13 Jan 02:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 19</td>
                      <td>Sat 16 Jan 21:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 20</td>
                      <td>Wed 27 Jan 02:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 21</td>
                      <td>Sat 30 Jan 21:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 22</td>
                      <td>Wed 3 Feb 02:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 23</td>
                      <td>Sat 6 Feb 21:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 24</td>
                      <td>Sat 13 Feb 21:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 25</td>
                      <td>Sat 20 Feb 04:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 26</td>
                      <td>Sat 27 Feb 21:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 27</td>
                      <td>Sat 6 Mar 21:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 28</td>
                      <td>Sat 13 Mar 04:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 29</td>
                      <td>Sat 20 Mar 04:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 30</td>
                      <td>Sat 3 Apr 20:00</td>
                    </tr>
                    <tr>
                      <td>Gameweek 31</td>
                      <td>Sat 10 Apr 03:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 32</td>
                      <td>Sat 17 Apr 03:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 33</td>
                      <td>Sat 24 Apr 03:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 34</td>
                      <td>Sat 1 May 03:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 35</td>
                      <td>Sat 8 May 03:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 36</td>
                      <td>Wed 12 May 03:15</td>
                    </tr>
                    <tr>
                      <td>Gameweek 37</td>
                      <td>Sat 15 May 22:30</td>
                    </tr>
                    <tr>
                      <td>Gameweek 38</td>
                      <td>Sun 23 May 23:30</td>
                    </tr>
                  </table>
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head"> Scoring</p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                  <div>
                    During the season, your fantasy football players will be
                    allocated points based on their performance in the Premier
                    League.
                  </div>
                  Action Points For playing up to 60 minutes 1 For playing 60
                  minutes or more (excluding stoppage time) 2 For each goal
                  scored by a goalkeeper or defender 6 For each goal scored by a
                  midfielder 5 For each goal scored by a forward 4 For each goal
                  assist 3 For a clean sheet by a goalkeeper or defender 4 For a
                  clean sheet by a midfielder 1 For every 3 shot saves by a
                  goalkeeper 1 For each penalty save 5 For each penalty miss -2
                  Bonus points for the best players in a match 1-3 For every 2
                  goals conceded by a goalkeeper or defender -1 For each yellow
                  card -1 For each red card -3 For each own goal -2
                  <div>Clean sheets</div>
                  <div>
                    A clean sheet is awarded for not conceding a goal whilst on
                    the pitch and playing at least 60 minutes (excluding
                    stoppage time).
                  </div>
                  <div>
                    If a player has been substituted when a goal is conceded
                    this will not affect any clean sheet bonus.
                  </div>
                  <div>Red Cards</div>
                  <div>
                    {" "}
                    If a player receives a red card, they will continue to be
                    penalised for goals conceded by their team.
                  </div>
                  <div>
                    Red card deductions include any points deducted for yellow
                    cards.
                  </div>
                  <div>Assists</div>
                  <div>
                    Assists are awarded to the player from the goal scoring
                    team, who makes the final pass before a goal is scored. An
                    assist is awarded whether the pass was intentional (that it
                    actually creates the chance) or unintentional (that the
                    player had to dribble the ball or an inadvertent touch or
                    shot created the chance).
                  </div>
                  <div>
                    If an opposing player touches the ball after the final pass
                    before a goal is scored, significantly altering the intended
                    destination of the ball, then no assist is awarded. Should a
                    touch by an opposing player be followed by a defensive error
                    by another opposing outfield player then no assist will be
                    awarded. If the goal scorer loses and then regains
                    possession, then no assist is awarded.
                  </div>
                  <div> Rebounds</div>
                  <div>
                    {" "}
                    If a shot on goal is blocked by an opposition player, is
                    saved by a goalkeeper or hits the woodwork, and a goal is
                    scored from the rebound, then an assist is awarded.
                  </div>
                  <div> Own Goals </div>
                  <div>
                    If a player shoots or passes the ball and forces an opposing
                    player to put the ball in his own net, then an assist is
                    awarded.
                  </div>
                  <div>Penalties and Free-Kicks</div>
                  <div>
                    {" "}
                    In the event of a penalty or free-kick, the player earning
                    the penalty or free-kick is awarded an assist if a goal is
                    directly scored, but not if he takes it himself, in which
                    case no assist is given.{" "}
                  </div>
                  <div>Finalising Assists</div>
                  <div>
                    {" "}
                    Assist points awarded by Opta within Fantasy Premier League
                    are calculated using additional stats which may differ from
                    other websites. For example, some other sites would not show
                    an assist where a player has won a penalty.
                  </div>
                  <div>
                    For the avoidance of doubt, points awarded in-game are
                    subject to change up until one hour after the final whistle
                    of the last match of any given day. Once the points have all
                    been updated on that day, no further adjustments to points
                    will be made.
                  </div>
                  <div> Bonus Points The Bonus</div>
                  <div>
                    Points System (BPS) utilises a range of statistics to create
                    a BPS score for every player. The three best performing
                    players in each match will be awarded bonus points. 3 points
                    will be awarded to the highest scoring player, 2 to the
                    second best and 1 to the third.
                  </div>
                  <div>
                    Examples of how bonus point ties will be resolved are as
                    follows:
                  </div>
                  <div>
                    <ul>
                      <li>
                        If there is a tie for first place, Players 1 & 2 will
                        receive 3 points each and Player 3 will receive 1 point.
                      </li>
                      <li>
                        {" "}
                        If there is a tie for second place, Player 1 will
                        receive 3 points and Players 2 and 3 will receive 2
                        points each.
                      </li>
                      <li>
                        If there is a tie for third place, Player 1 will receive
                        3 points, Player 2 will receive 2 points and Players 3 &
                        4 will receive 1 point each.
                      </li>
                    </ul>
                  </div>
                  <div> How is the BPS score calculated?</div>
                  <div>
                    Players score BPS points based on the following statistics
                    (one point for each unless otherwise stated):
                  </div>
                  <table>
                    <tr>
                      <td>Playing 1 to 60 minutes</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>Playing over 60 minutes</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>Goalkeepers and defenders scoring a goal</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>Midfielders scoring a goal</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      Forwards scoring a goal<td></td>
                      <td>24</td>
                    </tr>
                    <tr>
                      <td>Assists</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>Goalkeepers and defenders keeping a clean sheet</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>Saving a penalty</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>Save </td>
                      <td>2</td>
                    </tr>
                    <tr>
                      Successful open play cross<td></td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>
                        Creating a big chance (a chance where the receiving
                        player should score)
                      </td>
                      <td>3</td>
                    </tr>

                    <tr>
                      <td>
                        {" "}
                        For every 2 clearances, blocks and interceptions (total)
                      </td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>For every</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>clearances, blocks and interceptions (total)</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>For every </td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>recoveries </td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Key pass </td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Successful tackle (net*) </td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Successful dribble </td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>Scoring the goal that wins a match </td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>
                        70 to 79% pass completion (at least 30 passes attempted){" "}
                      </td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td>
                        0%+ pass completion (at least 30 passes attempted){" "}
                      </td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>Successful drConceding a penalty </td>
                      <td>-3</td>
                    </tr>
                    <tr>
                      <td>Missing a penalty</td>
                      <td>-6</td>
                    </tr>
                    <tr>
                      <td>Yellow card</td>
                      <td>-3</td>
                    </tr>
                    <tr>
                      <td>Red card</td>
                      <td>-9</td>
                    </tr>
                    <tr>
                      <td>Own goal</td>
                      <td>-6</td>
                    </tr>
                    <tr>
                      <td>Missing a big chance</td>
                      <td>-3</td>
                    </tr>
                    <tr>
                      <td>Making an error which leads to a goal </td>
                      <td>-1</td>
                    </tr>
                    <tr>
                      <td>Being tackled</td>
                      <td>-1</td>
                    </tr>
                    <tr>
                      <td>Conceding a foul</td>
                      <td>-1</td>
                    </tr>
                    <tr>
                      <td>Being caught offside </td>
                      <td>-1</td>
                    </tr>
                    <tr>
                      <td>Shot off target</td>
                      <td>-1</td>
                    </tr>
                  </table>
                  <div>
                    *Net successful tackles is the total of all successful
                    tackles minus any unsuccessful tackles. Players will not be
                    awarded negative BPS points for this statistic.
                  </div>
                  <div>
                    Data is supplied by Opta and once it has been marked as
                    final will not be changed. We will not enter into discussion
                    around any of the statistics used to calculate this score
                    for any individual match.
                  </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">Leagues</p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                  <div>
                    After entering your squad, you can join and create leagues
                    to compete with friends and other game players.
                  </div>
                  <div className="fantasy-rules-head-1">League Types</div>
                  <div>Private Leagues</div>
                  <div>
                    Private leagues are the heart and soul of the game, where
                    you compete against your friends. Just create a league and
                    then send out the unique code to allow your friends to join,
                    easy!
                  </div>
                  <div>
                    You can compete in up to 25 private leagues. There's no
                    limit on the number of teams in a single league.
                  </div>
                  <div>Public Leagues</div>
                  <div>
                    {" "}
                    Need an extra challenge? Then join a public league of
                    randomly assigned teams. You can compete in up to 5 public
                    leagues.
                  </div>
                  <div>Global Leagues</div>
                  <div>
                    {" "}
                    You are automatically entered into the following global
                    leagues:
                  </div>
                  <div>
                    <ul>
                      <li>The overall league featuring all registered teams</li>
                      <li> A league for fellow managers from your country</li>
                      <li>
                        {" "}
                        A league for supporters of your favourite Premier League
                        team
                      </li>
                      <li>
                        {" "}
                        A league for managers starting the same Gameweek as you
                        The Fantasy Cup (starts in Gameweek 17)
                      </li>
                    </ul>
                  </div>
                  <div>League Scoring</div>
                  <div>
                    All leagues score on either a Classic or Head-to-Head basis.
                  </div>
                  <div>Classic Scoring </div>
                  <div>
                    In a league with classic scoring, teams are ranked based on
                    their total points in the game. You can join or leave a
                    league with classic scoring at any point during the season.
                  </div>
                  <div>
                    In the event of a tie between teams, the team who has made
                    the least amount of transfers will be positioned higher. Any
                    transfers made using a wildcard or free hit will not count
                    towards total transfers made.
                  </div>
                  <div>
                    Classic scoring leagues are run over a number of phases:
                  </div>
                  <table>
                    <tr>
                      <td>Phase</td>
                      <td>First</td>
                      <td>Gameweek Last</td>
                    </tr>
                    <tr>
                      <td>Overall</td>
                      <td>Gameweek 1</td>
                      <td>Gameweek 38</td>
                    </tr>
                    <tr>
                      <td>September</td>
                      <td>Gameweek 1</td>
                      <td>Gameweek 3</td>
                    </tr>
                    <tr>
                      <td>October</td>
                      <td>Gameweek 4</td>
                      <td> Gameweek 7</td>
                    </tr>
                    <tr>
                      <td>November</td>
                      <td>Gameweek 8</td>
                      <td>Gameweek 10</td>
                    </tr>
                    <tr>
                      <td>December</td>
                      <td>Gameweek 11</td>
                      <td>Gameweek 16</td>
                    </tr>
                    <tr>
                      <td>January</td>
                      <td>Gameweek 17</td>
                      <td>Gameweek 21</td>
                    </tr>
                    <tr>
                      <td>February</td>
                      <td>Gameweek 22</td>
                      <td>Gameweek 26</td>
                    </tr>
                    <tr>
                      <td>March</td>
                      <td>Gameweek 27</td>
                      <td>Gameweek 29</td>
                    </tr>
                    <tr>
                      <td>April</td>
                      <td>Gameweek 30</td>
                      <td>Gameweek 34</td>
                    </tr>
                    <tr>
                      <td>May</td>
                      <td>Gameweek 35</td>
                      <td>Gameweek 38</td>
                    </tr>
                  </table>

                  <div>
                    Any transfer point deductions in the Gameweek before a phase
                    starts won't be deducted from the phase score. For example,
                    any transfers made in Gameweek 3 (preparing for Gameweek 4)
                    won't be deducted from your October score.
                  </div>
                  <div className="fantasy-rules-head-1">
                    {" "}
                    Head-to-Head Scoring{" "}
                  </div>
                  <div>
                    {" "}
                    In a league with Head-to-Head scoring, every team plays a
                    match against another team in the league each Gameweek. The
                    match result is based on the Gameweek score of each team
                    minus any transfer points spent preparing for the Gameweek.
                  </div>
                  <div>
                    {" "}
                    3 points are awarded for a win and 1 point for a draw, teams
                    are then ranked on points earned in Head-to-Head matches.
                  </div>
                  <div>
                    {" "}
                    Head-to-Head fixtures are generated at the start of the
                    league's first Gameweek. Once these fixtures have been
                    generated the league is locked and teams will not be able to
                    join or leave.
                  </div>
                  <div>
                    If a Head-to-Head league has an odd number of teams then an
                    average team will join the league to ensure each team has a
                    fixture every Gameweek. This team will always score the
                    Gameweek average.
                  </div>
                  <div>
                    {" "}
                    In the event of a tie between teams, the team who has most
                    game points will be positioned higher.
                  </div>
                  <div> Head-to-Head Knock-out stage</div>
                  <div>
                    Optionally, a Head-to-Head league may end with a knock-out
                    stage over up to 3 Gameweeks with the league winner decided
                    by a match in the final Gameweek. The automatically entered
                    average team will not enter the knock-out stage, their place
                    being taken by the next placed team.
                  </div>
                  <div>
                    > In the event of a tie between teams in a Head-to-Head
                    knock-out match, the following tie-breaks will be used:
                  </div>
                  <div>
                    <ul>
                      <li>1.Most goals scored in the Gameweek </li>
                      <li>2.Fewest goals conceded in the Gameweek</li>
                      <li> 3.Virtual coin toss</li>
                    </ul>
                  </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel8"}
                onChange={handleChange("panel8")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">The Cup</p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                  <div>The first round of the cup will be Gameweek 17.</div>
                  <div className="fantasy-rules-head-1">Qualifying</div>
                  <div>
                    The top 4,194,304 scorers in Gameweek 16 will enter the
                    first round. If there are more than 4,194,304 qualifiers
                    then there will be a random draw amongst the lowest scorers
                    to see who qualifies.
                  </div>
                  <div className="fantasy-rules-head-1">How it works</div>
                  <div>
                    Each qualifying team will be randomly drawn against another
                    in the first round. The winner (the team with the highest
                    Gameweek score minus any transfer points), will progress to
                    the second round and another random draw, the losers are
                    out! This process continues until the final Gameweek when
                    the two remaining teams contest the cup final.
                  </div>
                  <div>
                    If a cup match is drawn, then the following tie-breaks will
                    be applied until a winner is found:
                  </div>
                  <div>
                    <ul>
                      <li>Most goals scored in the Gameweek</li>
                      <li>Fewest goals conceded in the Gameweek</li>
                      <li>Virtual coin toss</li>
                    </ul>
                  </div>
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
        </div>
      </div>
      <div className="col-md-12 col-sm-12" style={{ padding: "5%" }}>
        <Socialbar />
      </div>
    </div>
  );
}
