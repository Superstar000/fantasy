import Product from '../model/product.model.js';
import * as Util from './util.controller.js';
const handleError = Util.handleError;

import httpStatus from "http-status";
import { response } from 'express';

// Product

export const createProduct = async (req, res, next) => {
    try {
        const {mode, data} = req.body;
        console.log(req);
        res.status(httpStatus.OK).send(req.query);
    } catch (e) {
        next(handleError(res, e))
    }
}

export const readProduct = async (req, res, next) => {
    try {
        let result;
        const {range} = req.query;
        console.log(req.query)
        delete req.query.range;
        if (range === 'all-factor') {
            Object.keys(req.query).forEach((key) => {
                // When filter product, if field is empty, remove that key from object.
                if (key !== 'enabled' && !req.query[key]) {
                    delete req.query[key]
                }
            });
            if (req.query.enabled !== '') {
                req.query.enabled = req.query.enabled === 'true';
            }  else {
                delete req.query.enabled;
            }
            result = await Product.find(req.query);
        } else if (range === '_id') {
            result = await Product.findOne(req.query);
        }
        res.status(httpStatus.OK).send(result)
    } catch (e) {
        next(handleError(res, e));
    }
}

export const updateProduct = async (req, res, next) => {
    try {
        let result;
        const {field, id, value} = req.body;
        if (field === 'enabled') {
            result = await Product.findOneAndUpdate({_id: id}, {enabled: value}, {new: true});
            res.status(httpStatus.OK).send(result)
        } else if (field === 'all') {
            console.log('product .....', req.body)
            result = await Product.findOneAndUpdate({_id: id}, value, {new: true});
        }
        res.status(httpStatus.OK).send(result)
    } catch (e) {
        next(handleError(res, e));
    }
}
