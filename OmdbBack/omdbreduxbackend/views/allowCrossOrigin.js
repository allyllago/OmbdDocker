const allowCrossOrigin = function(req, res, next) {
if ('OPTIONS' == req.method) {
 res.set({
	 'Access-Control-Allow-Origin': 'http://localhost:8000',
	 'Access-Control-Allow-Credentials': true,
	 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
	 "Access-Control-Allow-Headers": "Origin, X-Requested-With, Accept, Header, Content-Type, access-control-allow-origin",
	 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
 });
 return res.sendStatus(200);
}
res.set({
 'Access-Control-Allow-Origin': 'http://localhost:8000',
 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
 'Access-Control-Allow-Headers':"header, uthorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since",
	'Access-Control-Allow-Credentials': true,
});
 next();

};

module.exports = allowCrossOrigin;
