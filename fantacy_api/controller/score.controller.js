import Myteam from '../model/myteam.model.js';
import FantasyData from '../model/fantasydata.model.js';
import httpStatus from "http-status";
import axios from "axios";
import { handleError } from "./util.controller.js";
import config from '../config/var.config.js';
import jwt from 'jsonwebtoken';
import { response } from 'express';

export const getfantasydata = async (req, res, next) => {
    try {
        axios.defaults.headers.common['User-Agent'] = 'PostmanRuntime/7.26.2';
        axios.get('https://fantasy.premierleague.com/api/bootstrap-static/')
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        });
    } catch (e) {
        if (e.code === 11000) {
            res.status(httpStatus.CONFLICT).send(e)
        } else {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        }
    }
}

export const get_most_valuable_teams = async (req, res, next) => {
    try {
        axios.defaults.headers.common['User-Agent'] = 'PostmanRuntime/7.26.2';
        const response = await axios({
            method: "GET",
            url: `https://fantasy.premierleague.com/api/bootstrap-static/`
        });
        const fatasydata = await FantasyData.create(response.data.elements);
        
        const results = await Myteam.find().sort({money: -1}).limit(10);
        results.forEach(result => {
            result.picks.forEach(player => {
                var member = FantasyData.findOne({id: player.element});
            });
            result.score = team_score_calculate(result.picks);
        });
        res.status(httpStatus.OK).send(results);
    } catch (e) {
        next(handleError(res, e));
    }
}

export const get_best_score_teams = async (req, res, next) => {
    try {
        const results = await Myteam.find().sort({score: -1}).limit(10);
        res.status(httpStatus.OK).send(results);
    } catch (e) {
        next(handleError(res, e));
    }
}

function player_score_calculate(player)
{
    var goals_scores = 0;
    if(player.element_type == 1 && player.element_type == 2) {
        goals_scores = player.goals_scored * 6;
    } else if(player.element_type == 3) {
        goals_scores = player.goals_scored * 5;
    } else if(player.element_type == 4) {
        goals_scores = player.goals_scored * 4;
    }

    return player.bonus + player.bps + player.total_points + player.minutes / 60 * 2 + Number(player.influence) + Number(player.creativity) + Number(player.threat) + Number(player.ict_index) + goals_scores+ player.yellow_cards * (-1) + player.red_cards * (-3) + player.own_goals * (-2);
}

function team_score_calculate(team) {
    var total = 0;
    team.forEach(player => {
        total += player_score_calculate(player);
    });

    return total;
}
