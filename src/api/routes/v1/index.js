const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const shopRoutes = require('./shop.route');
const profileRoutes = require('./profile.route');
const mediaRoutes = require('./media.route');
const locationRoutes = require('./location.route');
const typeRoutes = require('./type.route');
const messageRoutes = require('./message.route');
const threadRoutes = require('./thread.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/shop', shopRoutes);
router.use('/profile', profileRoutes);
router.use('/media', mediaRoutes);
router.use('/location', locationRoutes);
router.use('/type', typeRoutes);
router.use('/message', messageRoutes);
router.use('/thread', threadRoutes);

module.exports = router;
