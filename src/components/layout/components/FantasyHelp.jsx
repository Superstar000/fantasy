import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Box } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import MuiCardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import MuiButton from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import Socialbar from "./subcomponent/socialbar";
import Submenubar from "./subcomponent/Submenubar";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    paddingTop: "40px",
    paddingBottom: "30px",
  },
  txtAlign: {
    textAlign: "left",
  },
  root: {
    display: "inline-block",
    border: "1px solid #E336FF",
    // margin: '30px',
    // [theme.breakpoints.up('md')]: {
    //   margin: "30px",
    // },
    // [theme.breakpoints.up('lg')]: {
    //   margin: "30px",
    // },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
      marginRight: 0,
      marginLeft: 0,
    },
  },
  title: {
    fontFamily: "initial",
    marginBottom: "60px",
  },
  reffirst: {
    [theme.breakpoints.up("lg")]: {
      //marginBottom: 'px'
      padding: "20px",
    },
    [theme.breakpoints.down("md")]: {
      //marginBottom: '28px'
    },
  },
  reffirst1: {
    [theme.breakpoints.up("lg")]: {
      //marginBottom: 'px'
      color: "#ff2882",
    },
    [theme.breakpoints.down("md")]: {
      //marginBottom: '28px'
      color: "#ff2882",
    },
  },

  minH: {
    [theme.breakpoints.up("md")]: {
      minHeight: "270px",
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: "270px",
    },
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

  return (
    <div className={classes.container} id="buy-space">
      <h2 className={classes.title}></h2>

      <div className="col-md-12 col-sm-12"></div>
      <div className="col-md-12 col-sm-12" style={{ padding: "0 10%" }}>
        <Card style={{padding:'0 5%'}}>
          <CardActionArea>
             
            <div className="fantasy-help-head">
              2020/21 Fantasy Premier League – Terms & Conditions
            </div>
            <div className="fantasy-help-content">
              <p>
                By registering to participate in the Fantasy Premier League (the
                "Game") you agree to be bound by and to abide by the following
                terms and conditions (the "Terms").
              </p>
              <p>
                These Terms may be amended or modified, or new conditions may be
                imposed, at any time. Any such changes or additions will be
                reflected by an update of this page. Please check these Terms
                periodically for changes. Your continued use of the Game
                following the posting of changes to these Terms will mean you
                accept those changes and that such changes shall apply to your
                use of the Game after such changes have been posted.
              </p>
              <p>
                The promoter of the Game is the Football Association Premier
                League Limited, a company registered in England with company
                number 02719699 whose registered office is at Brunel Building,
                57 North Wharf Road, London, United Kingdom, W2 1HQ ("we", "our"
                or the "Premier League").
              </p>
              <p>
                iOS users only: For the avoidance of doubt, Apple is not a
                sponsor, promoter, partner of, or in any way affiliated (or
                otherwise associated) with, the Game.
              </p>
              <p className="fantasy-help-content-head">
                Applications and Registration
              </p>
              <p>
                1. All applications to participate in the Game must be made
                online on the Premier League website at www.premierleague.com
                (the "Site") or via the Premier League mobile application (the
                "App"). No applications made in any other manner will be
                accepted. Where your application is accepted, you have
                successfully "Registered" and will become a "Player" of the
                Game. Each Player is then able to create a team or mini-league.
              </p>
              <p>
                2. Registration for the Game is open to both UK and non-UK
                residents. Employees (and immediate family members) of The
                Football Association Premier League Limited (the "Premier
                League") may enter the Game but are ineligible to win any Prizes
                (as defined below). If such person would otherwise win a Prize,
                the Prize shall be awarded to the next placed Player.
              </p>
              <p>
                3. Under 18s may Register to play the Game, however the consent
                of a parent or guardian is required to receive a Prize. The
                eligibility of an under 18 to win a Prize is set out below.
              </p>
              <p>
                4. No purchase of any item or service is necessary in order to
                enter the Game and no payment is required from you.
              </p>
              <p>
                5. Registrations must not be made by agents or third parties. No
                responsibility can be accepted for lost, delayed or incomplete
                Registrations or Registrations not received by the Premier
                League for any reason. Any such Registrations will be deemed
                void.
              </p>
              <p>
                6. There is no limit on the number of Registrations per
                household or organisation. However, only one Registration for
                the Game per user of the Site or App is permitted. Individuals
                are not permitted to register multiple accounts on the Site or
                App.
              </p>
              <p>
                7. While there is no closing date for Registration, and
                applications can be made throughout the Premier League season,
                the Premier League will publish deadlines from time to time by
                which you must be Registered as a Player in order to qualify for
                points awarded in respect of any round of matches in the Premier
                League competition. Any such information on how and when to
                enter for the Game forms part of these Terms and shall be
                binding on you.
              </p>
              <p>
                8. The Premier League reserves the right to suspend and delete
                Registrations that contain team or league names which are deemed
                by the Premier League to be inappropriate or offensive.
              </p>
              <p>
                9. In submitting a Registration and becoming a Player, you will
                be providing personal data to the Premier League. Any personal
                data which you do submit will be processed in accordance with
                the Premier League's Privacy Policy, which can be found here:
                https://www.premierleague.com/privacy-policy and in accordance
                with relevant data protection legislation including the General
                Data Protection Regulation ("GDPR") and the Data Protection Act
                2018.
              </p>
              <p>
                10. We will only share your data in accordance with our Privacy
                Policy and as set out in these Terms. Where a Player is a winner
                of a Prize, the winner's name may be published on the Site or
                App in accordance with clauses 27 and 28. The Premier League may
                also share your personal data if required to do so by a
                competent authority or court within the United Kingdom.
              </p>
              <p>
                11. Both UK and non-UK Players Registering for the Game will be
                automatically entered into a "Country League". A Country League
                is a mini-league consisting of Players from the same Country. In
                association with the official Premier League broadcaster in
                selected territories, the Premier League may choose (but will
                not guarantee) to offer a Prize to the overall winner of a
                Country League. The nature of the Prize and the countries
                selected for this purpose are at the sole discretion of the
                Premier League. Entry into a Country League is automatic but
                participation in no way obligates the Player to receive
                marketing communications from the Premier League or broadcaster
                unless otherwise indicated during Registration to the Site or
                App.
              </p>
              <p>
                12. Players (and Players on behalf of others and organisations)
                can establish mini-leagues in accordance with the Game Rules.
                The Premier League does not permit Players charging for entry to
                mini-leagues they have created, strongly encourages Players not
                to join such leagues and cannot be held responsible for their
                management or any loss suffered through Players’ involvement in
                such leagues. The Premier League reserves the right to suspend
                and delete Registrations of Players that charge entry to
                mini-leagues they have created.
              </p>
              <p className="fantasy-help-content-head">The Game Rules</p>
              <p>
                13. The Game will be governed by the Game Rules (as amended from
                time to time) published on the Site (and accessible via the App)
                by the Premier League ("Game Rules"). The Premier League
                reserves the right to alter, amend or supplement the Game Rules
                in its absolute discretion. You agree that no liability shall
                attach to the Premier League as a result of any such change and
                so are advised to check the Game Rules regularly. The Game Rules
                form part of these Terms and by Registering for the Game, you
                accept the Game Rules.
              </p>
              <p>
                14. The Premier League will be the sole decision-maker of any
                matter of interpretation of the Game Rules and any aspect of the
                content of, or playing of, the Game. The Premier League will not
                enter into correspondence relating to such matters and its
                decision as to any matter arising out of or in connection with
                the Game Rules including but not limited to the allocation of
                points to any Player and/or the award of any Prize and/or any
                ranking or league table shall be final and conclusive.
              </p>
              <p className="fantasy-help-content-head">Prizes and Winner's Details</p>
              <p>
                15. The Premier League may choose to award prizes in respect of
                the Game ("Prizes"). Such Prizes will be available at the
                discretion of the Premier League and in accordance with criteria
                set by it. The Premier League reserves the right to alter and
                amend the Prizes or the criteria for winning a Prize, where
                circumstances beyond its reasonable control require it to do so.
              </p>
              <p>
                16. Prizes are not transferable and are non-exchangeable. No
                cash alternative will be offered in any circumstances. The
                Premier League will make reasonable endeavours to accommodate
                any needs or requirements of Prize recipients and where a Prize
                includes travel or attendance at an event, the Premier League
                will seek to agree dates with the recipient. However, where the
                recipient is unavailable on the dates provided by the Premier
                League, the Prize may be forfeited, or another recipient
                selected.
              </p>
              <p>
                17. Subject to compliance with these Terms, all Players
                (excluding those listed in clause 2) are eligible to win the
                Prizes. However, where a Player is under the age of 18, they
                will not be eligible to win any cash element of a Prize (if
                applicable) and parental or guardian consent must be obtained.
                Such consent must include confirmation that the parent/guardian
                consented to the Player's Entry to the Game, they consent to the
                Player being awarded a Prize and will accompany the Player
                during any travel connected to the Prize.
              </p>
              <p>
                18. The Premier League intends (but does not undertake) for the
                following Prizes to be available:
              </p>
              <p>
                19. The first Prize ("Winner's Prize") will be awarded to the
                Player who, according to the Premier League's determination, is
                at the top of the leaderboard published by the Premier League at
                the end of the 2020/21 season.
              </p>
              <p>
                a) The Winner's Prize will be a 7-night break in the United
                Kingdom for two people to include VIP hospitality at two Premier
                League matches (the identity of which is determined by the
                Premier League) and visits to a selection of popular tourist
                attractions in the UK.
              </p>
              <p>
                b) The Winner's Prize includes travel (in the form of BritRail
                passes or similar and for those who live outside the UK only: 1
                return flight for the winner and a guest to the UK), and seven
                nights' hotel accommodation on a bed & breakfast basis.
              </p>
              <p>
                c) The Winner's Prize is also likely to include a Hublot Watch,
                an EA SPORTS FIFA game, games console, Nike manager jacket and
                Fantasy Premier League goody bag consisting of a rucksack,
                t-shirt, mug, water bottle, stress ball, pen, pad and key ring.
                The precise specification and nature of these items shall be at
                the discretion of the Premier League.
              </p>
              <p>
                20. The second Prize ("Runner-up Prize") will be awarded to the
                Player who according to the Premier League's determination
                finishes in second place in the overall leaderboard published by
                the Premier League at the end of the 2020/21 season.
              </p>
              <p>
                a) The Runner-up Prize shall consist of a VIP Trip for two to a
                Premier League match (the identity of which is determined by the
                Premier League). The prize includes travel (in the form of
                BritRail passes or similar and for those who live outside the UK
                only: 1 return flight for the winner and a guest to the UK), two
                nights' accommodation including breakfast and two match tickets.
              </p>
              <p>
                b) The Runner-up's Prize is also likely to include an EA SPORTS
                FIFA game, games console, tablet computer, Bluetooth speaker,
                Nike manager jacket and Fantasy Premier League goody bag
                consisting of a rucksack, t-shirt, mug, water bottle, stress
                ball, pen, pad and key ring. The precise specification and
                nature of these items shall be at the discretion of the Premier
                League.
              </p>
              <p>
                21. The third Prize ("Third Prize") will be awarded to the
                Player who according to the Premier League's determination
                finishes in third place in the overall leaderboard published by
                the Premier League at the end of the 2020/21 season.
              </p>
              <p>
                a) Subject to availability and any unforeseen changes, the Third
                Prize shall consist of an EA SPORTS FIFA game, games console,
                tablet computer, Bluetooth speaker, Nike manager jacket and
                Fantasy Premier League goody bag consisting of a rucksack,
                t-shirt, mug, water bottle, stress ball, pen, pad and key ring.
              </p>
              <p>
                22. Additionally, there will be a "Monthly Prize" awarded to the
                Player who according to the Premier League's determination is at
                the top of the monthly leaderboard published by the Premier
                League at the end of each monthly period during the season. The
                exact timing of when to select a winner and award this Prize is
                at the discretion of the Premier League.
              </p>
              <p>
                a) The Monthly Prizes (one each month during the season) shall
                each consist of (subject to availability) an EA SPORTS FIFA
                game, tablet computer, Bluetooth speaker, Nike Flight match
                ball, Nike manager jacket and Fantasy Premier League goody bag
                consisting of a rucksack, t-shirt, mug, water bottle, stress
                ball, pen, pad and key ring.
              </p>
              <p>
                b) Nine (9) Monthly Prize runners-up will each win (subject to
                availability) a goody bag consisting of a rucksack, t-shirt,
                mug, water bottle, stress ball, pen, pad and key ring.
              </p>
              <p>
                23. The "Weekly Prize" will be awarded to the Player who
                according to the Premier League's determination is at the top of
                the weekly leaderboard published by the Premier League at the
                end of each weekly period during the season. The exact timing of
                this is at the discretion of the Premier League.
              </p>
              <p>
                a) The Weekly Prizes (one each week during the season) shall
                each consist of (subject to availability) an EA SPORTS FIFA
                game, Nike Flight match ball and Fantasy Premier League goody
                bag consisting of a rucksack, t-shirt, mug, water bottle, stress
                ball, pen, pad and key ring.
              </p>
              <p>
                b) Nineteen (19) Weekly Prize runners-up will each win (subject
                to availability) a goody bag consisting of a T-shirt, stress
                ball, pen, pad and key ring.
              </p>
              <p>
                c) In order to be eligible to win the Weekly Prize, a Player
                must have Registered for the Game before the start of the season
                or a minimum of two clear weeks before the week in which they
                are top of the weekly leader board.
              </p>
              <p>
                d) Players who have played a chip that affects a game week
                result (including Bench Boost, Free Hit, Triple Captain or
                Wildcard (as defined in the Game Rules) will not be eligible to
                win the Weekly Prize for the week such a chip has been used.
              </p>
              <p>24. In the event:</p>
              <p>
                a) more than one Player is at the top of the monthly, weekly
                and/or final leader board; or
              </p>
              <p>
                b) there is a tie for the runner up prizes resulting in more
                than nine (9) runner ups for the Monthly Prize or more than
                nineteen (19) runner ups for the Weekly Prize, the relevant
                prizes shall be awarded to those teams which were first to
                register on the Site. The Premier League's decision will be
                final and no correspondence will be entered into.
              </p>
              <p>
                25. The "Cup Prize" will be awarded to the Player who according
                to the Premier League's determination wins the cup final at the
                end of the season.
              </p>
              <p>
                a) The Cup Prize shall consist of a VIP Trip for two to a
                Premier League match (the identity of which is determined by the
                Premier League).
              </p>
              <p>
                b) The Cup Prize includes travel (in the form of BritRail passes
                or similar and for those who live outside the UK only: 1 return
                flight for the winner and a guest to the UK), two nights'
                accommodation including breakfast and two match tickets. The Cup
                Prize also includes an EA SPORTS FIFA game, games console,
                tablet computer, Bluetooth speaker, Nike manager jacket and
                Fantasy Premier League goody bag consisting of a rucksack,
                t-shirt, mug, water bottle, stress ball, pen, pad and key ring.
                The precise specification and nature of these shall be at the
                discretion of the Premier League.
              </p>
              <p>
                26. Winners will be notified of their success by email in
                respect of the Prizes, using the email address used when
                Registering. Monthly Prizes are notified by the 28th day of the
                month following the month in respect of which such Prize is
                awarded. Weekly Prizes are notified within four weeks in respect
                of which such Prize is awarded. In respect of the
                Winner/Runner-up/Third/Cup Prize by Sunday 20th June 2021 at
                which time winners must confirm their contact details prior to
                the Prize in question being delivered.
              </p>
              <p>
                27. The winners' names will be published on the Site by the 28th
                day of the month following the month in respect of which the
                Monthly Prize is awarded in respect of winners of Monthly
                Prizes, within four weeks in respect of which the Weekly Prize
                is awarded and by Sunday 20th June 2021 in respect of the
                winners of the Winner/Runner-up/Third Prize; or alternatively
                winner's names can be obtained by sending a stamped
                self-addressed envelope to Fantasy Premier League, Premier
                League, Brunel Building, 57 North Wharf Road, London, United
                Kingdom, W2 1HQ.
              </p>
              <p>
                28. You hereby consent to the use by the Premier League of your
                name or team names for future promotional, marketing and
                publicity purposes of the Premier League or the Game without any
                compensation or prior notice. If you have an objection to the
                use of your name or team, please contact
                support@mail.fantasy.premierleague.com .
              </p>
              <p>
                29. The Premier League may wish to use the name and photograph
                of winners for promotional, marketing and publicity purposes in
                any and all media worldwide. The Premier League will contact
                winners to request their consent to their image being used.
                Where a Player is under 18, parental consent will also be
                required.
              </p>
              <p className="fantasy-help-content-head">Player Responsibilities</p>
              <p>
                30. You warrant and agree that, while participating in the Game,
                you shall not upload, post or transmit to or distribute or
                otherwise publish through the Game or in relation to the Game
                any information, content or materials that:
              </p>
              <p>
                (a) are protected by copyright, or other proprietary or
                intellectual property right, or derivative works with respect
                thereto, except as provided herein or without first obtaining
                permission from us or the copyright owner;
              </p>
              <p>
                (b) are unlawful, threatening, harassing, profane, tortious,
                defamatory, discriminatory, vulgar, obscene, libellous,
                deceptive, fraudulent, contains explicit or graphic descriptions
                or accounts of sexual acts (including, but not limited to,
                sexual language of a violent or threatening nature directed at
                another individual or group of individuals), invasive of
                another's privacy, or hateful;
              </p>
              <p>
                (c) restrict or inhibit any other user from using and enjoying
                the Game,
              </p>
              <p>
                (d) constitute or encourage conduct that would constitute a
                criminal offence or give rise to civil liability, or
              </p>
              <p>
                (e) contain a virus or other harmful component or similar
                computer code designed to adversely affect the operation of any
                computer software or hardware, advertising of any kind, or false
                or misleading indications of origin or statements of fact.
              </p>
              <p>31. You also warrant and agree that you shall not:</p>
              <p>
                (a) impersonate, or misrepresent your affiliation with any other
                person or entity;
              </p>
              <p>
                (b) upload, post, publish, transmit, reproduce, distribute or in
                any way exploit any information or other material obtained
                through the Game for commercial purposes (other than as
                expressly permitted by the provider of such information or other
                material);
              </p>
              <p>(c) engage in spamming or flooding;</p>
              <p>
                (d) attempt to gain unauthorised access to other computer
                systems through the Game; or
              </p>
              <p>(e) bring the Game or the Premier League into disrepute.</p>
              <p>
                32. Except as otherwise expressly permitted herein, you may not
                upload, post, publish, reproduce, transmit or distribute in any
                way any component of the Game itself or derivative works with
                respect thereto, as the Game is copyrighted as a collective work
                under the copyright laws of England and Wales.
              </p>
              <p>Premier League Responsibility and Liability</p>
              <p>
                33. The extent of the Premier League's responsibility to you has
                been determined in the context of the following:
              </p>
              <p>
                a) the Game is provided to you free of charge and on an "as is"
                basis;
              </p>
              <p>
                b) you are responsible for any action you do or do not take as a
                result of the Game and the information therein;
              </p>
              <p>
                c) you are responsible for ensuring that your equipment is
                enabled with appropriate up-to-date virus checking software.
              </p>
              <p>
                34. While the Premier League will endeavour to ensure that the
                Game is available to you at all times, without faults and that
                the contents are correct and accurate, it cannot make any legal
                commitment to you that this will be the case.
              </p>
              <p>
                35. Premier League reserves the right at any time to temporarily
                or permanently modify or discontinue the Game with or without
                prior notice (due to reasons outside its reasonable control). In
                the event that Premier League permanently discontinues the Game
                pursuant to this paragraph, you shall be released from your
                obligations to Premier League under these Terms.
              </p>
              <p>
                36. Nothing in these Terms limits or excludes Premier League's
                liability for (i) death or personal injury caused by our
                negligence; (ii) liability arising from fraud or fraudulent
                misrepresentation; or (iii) any other reason or by any cause
                which cannot be excluded by law.
              </p>
              <p>
                37. The Premier League accepts no liability to you for any
                damage, loss, liabilities, injury or disappointment incurred or
                suffered by you as a result of entering the Game or accepting a
                prize including but not limited to the following types of loss
                which you may suffer as a result of your entry to the Game:
              </p>
              <p>
                a) loss which was not foreseeable to you and the Premier League
                when you first applied for the Game (even if that loss results
                from the Premier League's failure to comply with these Terms or
                its negligence);
              </p>
              <p>
                b) any business loss you may suffer, including loss of revenue,
                profits, or anticipated savings (whether those losses are the
                direct or indirect result of the Premier League's default);
              </p>
              <p>
                c) loss which you suffer other than as a result of our failure
                to comply with these Terms or our negligence or breach of
                statutory duty;
              </p>
              <p>
                d) any loss which you may suffer as a result of or in connection
                with or arising out of any Prize.
              </p>
              <p className="fantasy-help-content-head">Breach</p>
              <p>
                38. Any breach by you of the Game Rules from time to time shall
                also be a breach of these Terms.
              </p>
              <p>
                39. In the event of any breach by you of these Terms the Premier
                League reserves the right in its sole discretion to:
              </p>
              <p>a) permanently or temporarily refuse you entry to the Game;</p>
              <p>b) disqualify you from the Game;</p>
              <p>c) modify, delete and/or suspend your Registration;</p>
              <p>
                d) delete all related information associated with your
                Registration;
              </p>
              <p>e) require any reasonable amendment to your Registration.</p>
              <p>
                All such decisions will be final and no correspondence will be
                entered into.
              </p>
              <p>
                40. If you are barred or disqualified from being Registered as a
                Player, you shall not be eligible to participate in the Game
                under any other identity or team name. Any such decision by the
                Premier League shall be final.
              </p>
              <p>
                41. If any of these Terms are determined to be illegal, invalid,
                or otherwise enforceable then the remaining terms shall continue
                in full force and effect.
              </p>
              <p>
                42. These Terms shall be governed by and construed in accordance
                with the laws of England and Wales and the parties agree to
                submit to the exclusive jurisdiction of the Courts of England
                and Wales.
              </p>
            </div>
          </CardActionArea>
        </Card>
      </div>
      <div className="col-md-12 col-sm-12" style={{ padding: "5%" }}>
        <Socialbar />
      </div>
    </div>
  );
}
