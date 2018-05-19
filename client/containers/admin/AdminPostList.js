import {connect} from 'react-redux';
import { likePostAdmin } from 'client/actions/postsActions';
import PostList from 'client/components/PostList';

import {ADMIN, ALL_POSTS} from 'client/Constants';

const mapStateToProps = state => {
	return {
		posts: state.posts.data
	}
}

const mapDispatchToProps = dispatch => {
	return {
		likePost: id => {
			dispatch(likePostAdmin(id))
		},
		onPostClick: post => {
      // FIXME лучше использовать истории из react-router
      // костылёк работает
      window.location.pathname = `/${ADMIN}/${ALL_POSTS}/${post.id}`;
		}
	};
}

// I guess PostList may be used somewhere in an application
// That's why I need FilteredPostList only for a HomePage
const AdminPostList = connect(
	mapStateToProps,
	mapDispatchToProps
)(PostList);

export default AdminPostList;
