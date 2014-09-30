/**
 * Created by Dmitriy on 2014-09-29.
 */
module.exports = function(req, res, next) {
    //TODO set based on subdomain
//    req.setLocale('ru');
    next();
};