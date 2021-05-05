import User from '../model/user.model.js';
import Country from '../model/country.model.js';
import httpStatus from "http-status";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config/var.config.js';
import {transporter} from './util.controller.js';

export const readCountry = async (req, res) => {
    try {
        const country = await Country.find({});
        res.status(httpStatus.OK).send(country);
    } catch (e) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

export const register = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(httpStatus.CREATED).send(user);
    } catch (e) {
        if (e.code === 11000) {
            res.status(httpStatus.CONFLICT).send(e)
        } else {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
        }
    }
}


export const login = (req, res) => {
    try {
        const {email, password} = req.body;
        User.findOne({email: email}).then(
            user => {
                if (user) {
                    bcrypt.compare(password, user.password, function(err, result) {
                        if (result) {
                            const token = jwt.sign({
                                user_id: user.id,
                                private_web_address: user.private_web_address,
                                email: user.email,
                                phone: user.phone,
                                email_verify: user.email_verify,
                                first_name: user.first_name,
                                last_name: user.last_name,
                                gender: user.gender,
                                birthday: user.birthday,
                                country: user.country,
                                postcode: user.postcode,
                                favourite_club: user.favourite_club,
                                other_club: user.other_club,
                                club_email_communication: user.club_email_communication,
                                premier_email_communication: user.premier_email_communication,
                                partner_email_communication: user.partner_email_communication,
                            }, config.jwtSecret, {expiresIn: config.jwtExpirationInterval});
                            res.status(httpStatus.OK).send({token})
                        } else {
                            res.status(httpStatus.BAD_REQUEST).send({
                                msg: 'Email or Password is invalid'
                            })
                        }
                    })
                } else {
                    res.status(httpStatus.NOT_FOUND).send({msg: 'User not found'})
                }
            }
        ).catch(e => {
            res.status(httpStatus.BAD_REQUEST).send(e);
        })
    } catch(e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e)
    }
}


export const sendEmailVerification = (req, res) => {
    try {
        const email = req.body.email;
        const buffer = new Buffer(email);
        const fakeToken = buffer.toString('base64');
        let   baseUrl = config.baseUrl;
        const verifyUrl = baseUrl + `auth/verify-email/${fakeToken}`;
        const template = '<br/>' + '<br/>' + "<div>Please click <a href='"+verifyUrl+"'>here</a> to make your account active</div>";
        const option = {
            to: email,
            from: config.supportEmail,
            subject: `Activate your Caposgt account`,
            html: template,
        };
        // transporter.sendMail(option, (error, info) => {
        //     if (error) {
        //         console.log('error while sending verify email ...',  error);
        //     } else {
                // res.status(httpStatus.OK).send(info);
                res.status(httpStatus.OK).send(info);
        //     }
        // })
    } catch(e) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e)
    }
}

export const verifyEmail = async (req, res) => {
    try {
        const fakeToken = req.body.fakeToken;
        const buff = Buffer.from(fakeToken, 'base64')
        const email = buff.toString('utf-8');
        const user = await User.findOneAndUpdate({email: email}, {email_verify: true}, {new: true});
        res.status(httpStatus.OK).send(user);
    } catch (e) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}
