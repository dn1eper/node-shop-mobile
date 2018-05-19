'use strict';

const config = require('../config');
const mariasql = require('mariasql');
// Creating DB connection
const db = new mariasql({
	host: config.get("database:host"),
	user: config.get("SHOP_USER"),
	password: config.get("SHOP_PASSWORD"),
	db: config.get("SHOP_DB")
	//port: 3306
});

const scripts = {
	allPosts : 'SELECT post_id id, title, htmlText, likes, price FROM post',
	tagsOfPost : 'SELECT name FROM post_tag WHERE post_id = :post_id',
	imagesOfPost : 'SELECT url FROM post_image WHERE post_id = :post_id',
	getPassHash : 'SELECT pass_hash, amin_id FROM admin WHERE login = :login',
	addNewUser : 'INSERT INTO admin (login, pass_hash) VALUES (:login, :pass_hash)',
	addNewOrder : 'INSERT INTO orders (user_id) VALUES (:user_id)',
	addNewOrderItem : 'INSERT INTO order_posts (order_id, post_id, count) VALUES (:order_id, :post_id, :count)',
	removeOrder: 'DELETE FROM order_posts WHERE order_id = :order_id',
	removeOrderItems: 'DELETE FROM orders WHERE order_id = :order_id'
}

module.exports.db = db;
module.exports.scripts = scripts;
