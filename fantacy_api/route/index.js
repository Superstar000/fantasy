import express from 'express';
import authRoutes from './auth.route.js';
import productRoutes from './product.route.js';
import utilRoutes from './util.route.js';
import sellRoutes from './sell.route.js';
import customerRoutes from './customer.route.js';
import saleRoutes from './sale.routes.js';
import fantasyRoutes from './fantasy.route.js';

const router = express.Router();
/**
 * Health check api*/

router.get('/healthCheck', (req, res) => res.send('Api response: OK'));

router.use('/auth', authRoutes);
router.use('/util', utilRoutes);
router.use('/product', productRoutes);
router.use('/sell', sellRoutes);
router.use('/customers', customerRoutes);
router.use('/sale', saleRoutes);

router.use('/fantasy', fantasyRoutes);

export default router;
