import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import MuiCardActions from "@material-ui/core/CardActions";
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
          How Can We Help?
        </h2>
        <br />
        <h4 style={{ color: "white", textAlign: "left", paddingLeft: "100px" }}>
          Your premierleague.com account
        </h4>
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
                    I can't sign in. What do I need to do?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Please ensure you are using your registered e-mail address
                    and correct password. Note that the password is case
                    sensitive. If you’ve registered for the first time this
                    season, you will need to activate your account before
                    entering a Fantasy Premier League team. An email will be
                    sent to the email address you’ve registered with and
                    contains a link you’ll need to click in order to activate
                    your account. If you haven’t received an email, please check
                    your spam or junk mail folders. Try resetting your password.
                    A temporary password will be sent to your mailbox. Please
                    update your password once logged in. If you do not receive
                    the password reminder, please check your Junk folder in your
                    email inbox and add noreply@mailout.users.premierleague.com
                    to your address book.
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
                  <p className="fantasy-rules-head">
                    Can I have more than one team?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    In the interest of fair play each person may only enter one
                    team. You may enter this team in multiple leagues and
                    compete against different groups of friends.
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
                  <p className="fantasy-rules-head">
                    I have set up a team, but I can't see my History or renew my
                    leagues from previous seasons. Can you link my new account
                    to my old one?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Unfortunately, we cannot link your history from an old
                    account to a new one. If you have set up a team for this
                    season using a different email address, you will not be able
                    to view your History from previous seasons on that account.
                    In order to see previous seasons' scores, you will need to
                    sign in on the homepage using the registered email address
                    and password combination from the previous seasons and set
                    up a team using that account.
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
                  <p className="fantasy-rules-head">
                    {" "}
                    Can I make changes to my squad after entering the game?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Yes, unlimited free transfers can be made before the next
                    deadline.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
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
                  <p className="fantasy-rules-head">
                    {" "}
                    Is there a print-friendly list of players I can view?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>We have a full player list you can view and print. </div>
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
                  <p className="fantasy-rules-head">
                    {" "}
                    What formation can I play in?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    You can play in any formation, providing 1 goalkeeper, at
                    least 3 defenders and at least 1 forward are selected at all
                    times.{" "}
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
                  <p className="fantasy-rules-head">
                    {" "}
                    How do I change my team name, my team kit or the team I
                    support?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    You can change this information on the team details page.
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
                  <p className="fantasy-rules-head">
                    {" "}
                    Can I make changes to my team during a Gameweek?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Any changes you make (starting 11, transfers, captain
                    changes, substitution priorities) after the Gameweek
                    deadline, will not take effect until the following deadline.
                    View all deadlines.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel9"}
                onChange={handleChange("panel9")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    How do I report an inappropriate or offensive name?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    When registering a team or league within FPL, all managers
                    are asked to think carefully before entering a name. Names
                    that are deemed inappropriate or offensive may result in a
                    team and/or league being deleted (see Terms & Conditions).
                    If you spot a name you find inappropriate or offensive then
                    please let us know by reporting the manager name and the
                    team or league name using the form below. Your details will
                    not be shared with anyone. We will look into the report and
                    take immediate and appropriate action. It's important to us
                    that Fantasy Premier League is an inclusive space where
                    everyone feels welcome and safe. Thank you for your help.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel10"}
                onChange={handleChange("panel10")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    How often can each chip be used?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    The Bench Boost and Triple Captain chips can each be used
                    once a season and are played when saving your team on the my
                    team page. They can be cancelled at anytime before the
                    Gameweek deadline. The Free Hit chip can be used once a
                    season, is played when confirming your transfers and can't
                    be cancelled after confirmed. The Wildcard chip can be used
                    twice a season, once in the first half of the season (before
                    Mon 28 Dec 23:30) and once in the second half of the season.
                    The Wildcard chip is played when confirming transfers that
                    cost points and can't be cancelled once played.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel11"}
                onChange={handleChange("panel11")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    Can I use more than one chip in the same Gameweek?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    No, only one chip may be active in a Gameweek. For example,
                    it is not possible to make transfers with your Wildcard chip
                    and then use your Bench Boost chip in the same Gameweek.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel12"}
                onChange={handleChange("panel12")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    What happens to my Triple Captain chip if my captain doesn't
                    play?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    The triple points bonus will be passed to your vice-captain.
                    If your vice-captain doesn't play either then the bonus is
                    lost, the chip isn't returned.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel13"}
                onChange={handleChange("panel13")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    How do price changes affect the Free Hit chip?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    After playing your Free Hit chip, at the next deadline your
                    bank balance and squad is restored to as they were at the
                    previous deadline, with any player price changes in the
                    previous gameweek reflected. Any change to your bank balance
                    whilst the Free Hit chip was active will be lost.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel14"}
                onChange={handleChange("panel14")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    I can't join a friend's private league. What do I need to
                    do?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    First of all you must have entered a team in the game. Once
                    you have a team, make sure that you have the correct league
                    code and that you are entering it in the format it is
                    written, for example a6x9zb.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel15"}
                onChange={handleChange("panel15")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    How do I renew my private league?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    If you were the league administrator, and your league was a
                    Classic league, you will have the option to 'Renew your
                    leagues' when you click on the 'Leagues' tab. If your league
                    was a Head-to-Head league, you will need to create a new
                    league each season, as you are unable to renew this type of
                    private league.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel16"}
                onChange={handleChange("panel16")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    When are bonus points added?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Bonus points will be awarded one hour after the final
                    whistle of the last match of any given day.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel17"}
                onChange={handleChange("panel17")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    My player's BPS has changed since the end of his match. Why?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Some BPS statistics are received after the end of the match
                    so players may rise / fall up to an hour after the end of
                    the days matches.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel18"}
                onChange={handleChange("panel18")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    Why haven’t my players been automatically substituted yet?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Substitutions happen at the end of the Gameweek, when all
                    matches have been played. You can check the list of current
                    fixtures, to determine when this is.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel19"}
                onChange={handleChange("panel19")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    I think my automatic substitutions are wrong.
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Your team must have 1 goalkeeper, at least 3 defenders and
                    at least 1 forward selected at all times. If your starting
                    team has 3 defenders, and one of them played 0 minutes, he
                    can only be replaced by another defender who played.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel20"}
                onChange={handleChange("panel20")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    What happens if a player is transferred to another Premier
                    League team?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    If a player is transferred to another team in the Premier
                    League, and this transfer takes you over the 3 players per
                    team limit, then you will need to go back under the limit
                    when making your next transfers.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "pane21"}
                onChange={handleChange("pane21")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    When will new players be added?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    New players will be added within 7 days of their transfer
                    being completed.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel22"}
                onChange={handleChange("panel22")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    My player has left the Premier League. What do I do now?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    You can leave the player in your squad, where he will
                    continue to earn 0 points. To remove him permanently, you
                    must use a transfer.
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
                expanded={expanded === "panel23"}
                onChange={handleChange("panel23")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    I have been removed from one of my leagues. Why is this?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Either you removed yourself accidentally or you were removed
                    from the league by the league administrator. Try rejoining
                    the league using the league code. If you are unsuccessful,
                    please check with your league administrator.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel24"}
                onChange={handleChange("panel24")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    Why is my total less than the sum of my Gameweek points?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Transfer points are deducted from your total, as explained
                    in the rules and before you confirm your transfers.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel25"}
                onChange={handleChange("panel25")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    Why is my Head-to-Head score less than my Gameweek score?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Transfer points are deducted from your Head-to-Head score,
                    as explained in the rules.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel26"}
                onChange={handleChange("panel26")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    How can I view other teams in my league?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Other teams can only be viewed after their first Gameweek
                    has started, to allow managers to keep their team tactics
                    secret. To view a team, simply click on their team name in
                    the league table.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel27"}
                onChange={handleChange("panel27")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    Is there a limit on the number of teams in a private league?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    No, the more the merrier. However, only 50 teams will be
                    shown at once, so you will have to use the previous/next
                    links to scroll through your league table.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel28"}
                onChange={handleChange("panel28")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    I still haven’t been added to my league.
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Your team will be added to the league at the next points
                    update.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel29"}
                onChange={handleChange("panel29")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    I haven't been entered into the supporters league for my
                    favourite club. Why is this?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Please ensure that you have selected your favourite team. As
                    long as you select the club before your first deadline, you
                    will be automatically entered into the supporters' league
                    for that club.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel30"}
                onChange={handleChange("panel30")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    Why am I not included in my country’s leaderboard?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    You are entered into the country league according to your
                    premierleague.com profile. To update your country use the My
                    Account page on premierleague.com. Your country league won't
                    change after your first deadline even if you update your
                    profile.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel31"}
                onChange={handleChange("panel31")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    If I don’t use my free transfer, do I get two the next
                    Gameweek?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    If you do not use your free transfer, you are able to make
                    an additional free transfer the following Gameweek. If you
                    do not use this saved free transfer in the following
                    Gameweek, it will be carried over until you do. You can
                    never have more than 1 saved transfer.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel32"}
                onChange={handleChange("panel32")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    Can I cancel my transfers?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    No. Once you have confirmed your transfers, they are final
                    and can’t be reversed under any circumstances.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel33"}
                onChange={handleChange("panel33")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    I’m only receiving the amount I paid for a player, not their
                    current price minus sell-on fee.
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Prices shown on the transfer page are players’ selling
                    prices minus any sell-on fee. To check the price you paid
                    for a player, please use the list view on the transfers
                    page.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel34"}
                onChange={handleChange("panel34")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    Transfers don’t seem to be costing me points.
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Transfer points are deducted at the start of the next
                    Gameweek. Transfers are free of charge before the start of
                    the season. If you join the game after the start of the
                    season, transfers are free until your first deadline.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel35"}
                onChange={handleChange("panel35")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head"> What is a wildcard?</p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    A wildcard allows you to make unlimited free transfers
                    throughout a Gameweek. Playing a wildcard will remove any
                    points deductions from transfers already made in the same
                    Gameweek. You play a wildcard when you want to make multiple
                    changes to your team, for example Gameweeks when teams are
                    playing more than once, or when your team is underperforming
                    or has a lot of injuries. When using a wildcard, you must
                    remain within your current budget. There is no unlimited
                    budget when using a wildcard.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel36"}
                onChange={handleChange("panel36")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    When can I play a wildcard?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    The Wildcard chip can be used twice a season, once in the
                    first half of the season (before Mon 28 Dec 23:30) and once
                    in the second half of the season. Wildcards are played on
                    the transfers page but aren't active until you have
                    confirmed the transfers.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel37"}
                onChange={handleChange("panel37")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    Can I cancel my wildcard?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    No. Once you have confirmed your wildcard it is final and
                    can’t be reversed under any circumstances.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel38"}
                onChange={handleChange("panel38")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    Do all transfers have to be made at the same time when using
                    my wildcard?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    No. Once you have played your wildcard, any transfers you
                    make within that Gameweek are free, including any you made
                    before playing your wildcard, up until the next deadline.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel39"}
                onChange={handleChange("panel39")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    What happens when a team is playing twice in one Gameweek?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Any players you have from the team playing twice will earn
                    two sets of points, assuming that the player plays in both
                    fixtures. Any team captains playing in two fixtures will
                    also earn double points for each match he plays in.{" "}
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel40"}
                onChange={handleChange("panel40")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    One of my players was scheduled to play twice in one
                    Gameweek, but only played in one match. Why wasn’t he
                    substituted in the match he didn’t play?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    If a player plays any minutes in any scheduled matches in a
                    Gameweek, then he does not qualify for an automatic
                    substitution. The same rule applies to captains. If your
                    captain only plays in one of the two matches, he will not be
                    replaced as captain in the match he doesn’t play.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel41"}
                onChange={handleChange("panel41")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    Any players you have from that team will score 0 for that
                    Gameweek. Players will play twice in a future Gameweek, when
                    the match is rescheduled.
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Points are only awarded to teams who have players selected
                    in their team in the Gameweek the fixture is actually
                    played, irrespective of if you had them selected for the
                    original fixture.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel42"}
                onChange={handleChange("panel42")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    When is the game updated?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Player points are updated as the matches take place, whilst
                    team points and league tables are usually updated 2 hours
                    after the final whistle in the last match of the day. Bonus
                    points will be awarded one hour after the final whistle of
                    the last match of any given day. Automatic substitutions and
                    captain changes are processed at the end of the Gameweek,
                    when all matches have been played.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel43"}
                onChange={handleChange("panel43")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    A yellow/red card decision or goalscorer has been changed in
                    an earlier match. Are you going to alter the points?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Once the points have all been updated on that day, no
                    further adjustments to points will be made.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel44"}
                onChange={handleChange("panel44")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    Why was/wasn’t an assist given to...?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    All assists are reviewed before the points are updated at
                    the end of each day. If an assist still hasn’t been given
                    after this time, please refer to the assist definition in
                    the rules for further clarification.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel45"}
                onChange={handleChange("panel45")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    How do player prices change?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Once the season has started, player prices may change by
                    £0.1m a day, based on activity in the transfer market. Both
                    the formula used to calculate this change and the time of
                    the change include variable factors, and won’t be revealed
                    to game players.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel46"}
                onChange={handleChange("panel46")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    How do you calculate form?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    Form is a player’s average score per match, calculated from
                    all matches played by his club in the last 30 days.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel47"}
                onChange={handleChange("panel47")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    What is the Fixture Difficulty Ranking (FDR)?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    The Fixture Difficulty Ranking (FDR) is based on a complex
                    algorithm developed by Fantasy Premier League experts. A set
                    of formulas process key Opta data variables, along with each
                    team’s home and away form (past six matches), in order to
                    generate a rank for the perceived difficulty of each
                    Gameweek opponent. The FDR is designed to help FPL managers
                    plan their transfer and team selection strategy and is
                    reviewed on a weekly basis.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel48"}
                onChange={handleChange("panel48")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head"> What is the ICT Index?</p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    The ICT Index is a football statistical index developed
                    specifically to assess a player as an FPL asset. It uses
                    match event data to generate a single score for three key
                    areas – Influence, Creativity and Threat. These figures then
                    combine to create an individual’s ICT Index score. It
                    condenses more than 40 match event statistics into four
                    distinct scores. These offer a view on player performance
                    for factors that are known to produce FPL points. 1.
                    Influence Influence is the first measurement - this
                    evaluates the degree to which that player has made an impact
                    on a match, or matches over the season. It takes into
                    account events and actions that could directly or indirectly
                    effect the match outcome. At the very top level these are
                    decisive actions like goals and assists. However, the
                    Influence score also processes significant defensive actions
                    to analyse the effectiveness of defenders and goalkeepers.
                    2. Creativity Creativity assesses player performance in
                    terms of producing goal scoring opportunities for others. It
                    can be used as a guide to identify the players most likely
                    to supply assists. While this analyses frequency of passing
                    and crossing, it also considers pitch location and the
                    incisiveness of the final ball. 3. Threat Threat is the
                    third measure, producing a value that examines a player’s
                    threat on goal; it therefore gauges those individuals most
                    likely to score goals. While attempts are the key action,
                    the Index looks at pitch location, giving greater weight to
                    actions that are regarded as the best openings to register a
                    goal. All three of these scores are then combined to create
                    an overall ICT Index score. That then offers a single figure
                    that presents a view on that player as an FPL asset.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel49"}
                onChange={handleChange("panel49")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    How does FPL decide which position a player should be
                    categorised?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    The players have been positioned in the game based on the
                    following position definitions: Goalkeeper The player in
                    goal who is permitted to use their hands inside the penalty
                    area. It is worth noting that if an outfield player takes
                    over goalkeeping responsibility (due to no substitute
                    goalkeeper being available), he will be able to collect
                    points for saves, but will score points as per their
                    position classification (e.g. if a midfielder assumes
                    goalkeeping responsibilities, he will only receive one point
                    for a clean sheet) in the game. Defender Lining up in front
                    of the goalkeeper, these players are charged with defending
                    their goal. Central defenders will often be dominant
                    figures, amassing clearances, blocks and interceptions
                    (CBI). Full-backs and wing-backs will often record more
                    tackles while also contributing in attack. They provide
                    crosses and create chances for team-mates. Midfielder A
                    player positioned in front of the defence who either plays
                    centrally or in a wide position. They are charged with
                    breaking up opponents’ attacks and providing the passes and
                    crosses to create chances for their own team. This position
                    also includes attacking midfielders who can play behind the
                    forward line as a No 10, or as wide players and wingers and
                    therefore includes players on the left and right of a
                    central striker in a 4-3-3 formation. Their role is to
                    provide goals, either by creating chances or by converting
                    opportunities themselves. Forward The forward (also known as
                    a striker) is deployed ahead of the midfield and in a
                    central area rather than out wide. They often operate either
                    as a lone striker or as part of a front pairing, e.g. a
                    4-4-2 or 3-5-2 formation. Their primary role is to score
                    goals rather than create chances, and this is reflected in
                    the Bonus Points System (BPS) with forwards rewarded more
                    significantly for goals scored.
                  </div>
                </AccordionDetails>
              </Accordion>
            </CardActionArea>
          </Card>
          <div className="inner-space">&nbsp;</div>
          <Card>
            <CardActionArea>
              <Accordion
                expanded={expanded === "panel50"}
                onChange={handleChange("panel50")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <p className="fantasy-rules-head">
                    {" "}
                    How are bonus points calculated?
                  </p>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    The three best performing players in each match according to
                    the Bonus Points System (BPS) will receive additional bonus
                    points. 3 points will be awarded to the highest scoring
                    player, 2 to the second best and 1 to the third. Examples of
                    how bonus point ties will be resolved are as follows: If
                    there is a tie for first place, Players 1 & 2 will receive 3
                    points each and Player 3 will receive 1 point. If there is a
                    tie for second place, Player 1 will receive 3 points and
                    Players 2 and 3 will receive 2 points each. If there is a
                    tie for third place, Player 1 will receive 3 points, Player
                    2 will receive 2 points and Players 3 & 4 will receive 1
                    point each.
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
