const jwt = require('jsonwebtoken');

const app_secret = 'myappsecret';
const username = 'admin';
const password = 'secret';

module.exports = function (req, res, next) {
    if (req.url === '/login' && req.method === 'POST') {
        if (req.body.username === username && req.body.password === password) {
            let token = jwt.sign({ data: username }, app_secret, { expiresIn: '1h' });
            res.json({ success: true, token: token });
        } else {
            res.json({ success: false, message: 'Invalid username or password' });
        }
        return;
    } else {
        if ((req.url.startsWith("/products") || req.url.startsWith("/categories")) && req.method !== 'GET') {
            let token = req.headers['authorization'];

            if (token == null) {
                res.status(401).json({ success: false, message: 'Authorization header is missing' });
                return;
            }

            if (token.startsWith("Bearer ")) {
                token = token.substring(7, token.length);
                try {
                    jwt.verify(token, app_secret);
                    next();
                    return;
                } catch (err) {
                    res.status(401).json({ success: false, message: 'Invalid token' });
                    return;
                }
            } else {
                res.status(401).json({ success: false, message: 'Invalid token format' });
                return;
            }
        }
        next();
    }
};
