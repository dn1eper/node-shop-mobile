'use strict';
const auth = require('../authentication');
const posts = require('../posts');
const cart = require('../cart');

module.exports = function(app) {
    // Just fetching all posts
    app.get('/', (req, res, next) => {
        posts.getAllPosts((posts) => {
            res.json({posts: posts});
        });
    });

    // To serve static files (images)
    app.get('/file/*', (req, res, next) => {
        let filename = req.params[0];
        res.send(filename);
        // TODO smth with this
    });


    // Trying to authenticate
    app.post('/authenticate', (req, res, next) => {
        auth.authenticate(req.body.login, req.body.pass, user_id => {
            if (user_id) {
                var token = auth.generateToken(user_id);
                return res.json({token: token}); 
            }
            else { return res.json({token: false}); }
        });
    });

    // Reauthenticate if token time has expired
    app.post('/reauthenticate', (req, res, next) => 
        auth.reGenerateToken(req.body.token, newToken =>
            res.json({token: newToken}))
    );

    // Logout
    app.post('/logout', (req, res, next) => {
        auth.deleteToken(req.body.token);
        res.json({status: 'success'});
    });

    // Trying to register new user
    app.post('/register', (req, res, next) => 
        auth.register(req.body.login, req.body.pass, result => 
            res.json(result)
        )
    );

    // User send his cart to confirm order
    app.post('/order', (req, res, next) => {
        if (auth.checkToken(req.body.token)) {
            let user_id = auth.getUserId(req.body.token);
            cart.createNewOrder(req.body.items, user_id, result => 
                res.json(result)
            );
        }
        else res.json({status: 'Token not valid'});
    });


    /// Orders manipulation

    // New post
    app.post('/orders/new', (req, res, next) => {
        // Check if admin auth key
    });

    // Edit post
    app.put('/orders/:orderId', (req, res, next) => {

    });

    // Delete post
    app.delete('/orders/:orderId', (req, res, next) => {

    });
}
