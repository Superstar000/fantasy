import {Router} from 'express';
import * as FantasyController from '../controller/fantacy.controller.js';
import * as MyteamController from '../controller/myteam.controller.js';
import * as ScoreController from '../controller/score.controller.js';
const router = Router();
import * as Util from '../controller/util.controller.js';
const upload = Util.upload;

// Product brand

router.route('/status')
    .post(FantasyController.createProduct)
    .get(FantasyController.readProduct)
    .put(FantasyController.updateProduct);

router.route('/myteam')
    .post(MyteamController.createMyteam)
    .get(MyteamController.readMyteam)
    .put(MyteamController.updateMyteam);


router.route('/score')
    .get(ScoreController.getfantasydata);

router.route('/get-valuable-team')
    .get(ScoreController.get_most_valuable_teams);

router.route('/get-best-score-team')
    .get(ScoreController.get_best_score_teams);

export default router;
