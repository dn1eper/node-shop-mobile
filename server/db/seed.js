const config = require('../config');
const mariasql = require('mariasql');
const utils = require('../utils');
const seed = require('./seed.json');
const db = new mariasql({
	host: config.get("database:host"),
	user: config.get("SHOP_USER"),
	password: config.get("SHOP_PASSWORD"),
	db: config.get("SHOP_DB")
	//port: 3306
});

let inserts = [
	['INSERT INTO admin (login, pass_hash) VALUES (?, ?)', 'admin', utils.hash('password')],
	['INSERT INTO admin (login, pass_hash) VALUES (?, ?)', 'ian', utils.hash('admin')]
];

seed.posts.forEach(({id, title, htmlText, price, images, tags}) => {
	inserts.push(['INSERT INTO post (post_id, title, htmlText, price) VALUES (?, ?, ?, ?)', id, title, htmlText, price]);
	images.forEach((url) => 
		inserts.push(['INSERT INTO post_image (url, post_id) VALUES (?, ?)', url, id])
	);
	tags.forEach((tag) => 
		inserts.push(['INSERT INTO post_tag (name, post_id) VALUES (?, ?)', tag, id])
	);
});

inserts.forEach(function(item, index) {
	db.query(item[0], item.slice(1), function(err) {
		if (err) {
			db.end();
			console.dir(item);
			throw err;
		}
		console.log(index + 'rows inserted');
	});
});

db.end();
