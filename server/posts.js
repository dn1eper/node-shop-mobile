'use strict';
/* Using databases requires syncronous selections or special
 * SQL commands. It wasn't cool to make our simple flat model
 * work with complex SQL queries. The main problem is in relations
 * one-to-many. For example posts can have many tags and comments.
 * It seems impossible to query one relation and fill all data with it.
 *
 * So for now we choose syncronously filling the data we want
 * to return using Promises.
 */

const Promise = require('bluebird');
const dbManager = require('./db');

const db = dbManager.db;
const scripts = dbManager.scripts;

/* Getting all posts.
 */
const getPosts = new Promise(function(resolve, reject) {
	db.query(scripts.allPosts, (err, res) => {
		if (err) { reject(err); }
		resolve(res);
	});
});

/* Filling posts with images.
 */
const getImages = (post) => {
	return new Promise(function(resolve, reject) {
		db.query(scripts.imagesOfPost, {post_id: post.id}, (err, rows) => {
			if (err) { reject(err); }
			// TODO add alt
			post.imageList = rows.map(img => ({url: img.url}));
			return resolve( post );
		});
	});
};

/* Filling posts with tags.
 */
const getTags = (post) => {
	return new Promise(function(resolve, reject) {
		db.query(scripts.tagsOfPost, {post_id: post.id}, (err, rows) => {
			if (err) { reject(err); }
			post.tags = rows.map(tag => tag.name);
			return resolve( post );
		});
	});
};

/* Composing all fillers to construct post list.
 * getPosts -> getImages -> getTags
 * Public interface.
 */
function getAllPosts(callback) {
	if (typeof(callback) !== 'function') {
		console.log('getAllPosts: expects a callback function as an arg');
		return;
	}
	getPosts.then(posts => {
		let result = [];
		Promise.map(posts, (post) => {
			return getImages(post) // find images for each post
				.then(post => getTags(post)); // find tags for each post
		}).then(posts => {
			callback(posts);
		});
	}).catch( err => {console.log(err);}); // FIXME Log error the right way
}

module.exports.getAllPosts = getAllPosts;
