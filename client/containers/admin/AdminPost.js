import React from 'react';
import { connect } from 'react-redux';

let AdminPost = ({ tags, likes, htmlText }) => (
  <div className="post" >
	  <div className="post__text" dangerouslySetInnerHTML={{__html:htmlText}}></div>
	  <span className="post__likes" >{likes} likes</span>
	  <div className="post__tags">
		{tags.map((name, index) => (
			<div className="post__tag" key={index}>
			  {name}
			</div>
		))}
	</div>
		</div>
);

const mapStateToProps = (state, {match: {params}}) => {
  let post = state.posts.data.find(post => post.id === params.postId);
	return {
		tags: post.tags,
    likes: post.likes,
    htmlText: post.htmlText
	}
}

const mapDispatchToProps = dispatch => {
	return {
	};
}

AdminPost = connect(mapStateToProps, mapDispatchToProps)(AdminPost);

export default AdminPost;
