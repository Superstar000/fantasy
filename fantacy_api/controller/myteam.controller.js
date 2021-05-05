import Myteam from '../model/myteam.model.js';
import httpStatus from "http-status";
import { handleError } from "./util.controller.js";
import config from '../config/var.config.js';
import jwt from 'jsonwebtoken';


export const createMyteam = async (req, res, next) => {
    try {
        var user = get_auth(req);
        if(user) {
            let myteam_info = {
                user_id: user.user_id,
                myteam_name: req.body.myteam_name,
                favourite_team: req.body.favourite_team,
                picks: req.body.picks,
                terms_agreed: req.body.terms_agreed
            }
            const myteam = await Myteam.create(myteam_info);
            res.status(httpStatus.CREATED).send(myteam);
        } else {
            res.status(httpStatus.OK).send("Unauthorized!");
        }
    } catch (e) {
        if (e.code === 11000) {
            res.status(httpStatus.CONFLICT).send(e)
        } else {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        }
    }
}

export const readMyteam = async (req, res, next) => {
    try {
        try {
            var auth = get_auth(req);
            if(auth) {
                var userId = auth.user_id;
                const result = await Myteam.findOne({user_id: userId});
                res.status(httpStatus.OK).send(result);
            } else {
                res.status(httpStatus.OK).send("Unauthorized!");
            }
        } catch (e) {
            next(handleError(res, e));
        }
    } catch (e) {
        next(handleError(res, e));
    }
}

export const updateMyteam = async (req, res, next) => {
    try {
        let result;
        const {myteam_name, favourite_team, picks} = req.body;
        var auth = get_auth(req);
        result = await Myteam.findOneAndUpdate({user_id: auth.user_id}, {myteam_name: myteam_name, favourite_team: favourite_team, picks: picks}, {new: true});
        
        res.status(httpStatus.OK).send(result)
    } catch (e) {
        next(handleError(res, e));
    }
}

function get_auth(req) 
{
    var authorization = req.headers.authorization.split(' ')[1], decoded;
    try {
        return decoded = jwt.verify(authorization, config.jwtSecret);
    } catch (e) {
        return false;
    }
}


