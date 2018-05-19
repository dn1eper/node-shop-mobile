import React from 'react';
import PostFilter from 'client/containers/PostFilter';
import FilteredPostList from 'client/containers/FilteredPostList';

const HomePage = ({ match: { params } }) => (
	<div>
	<PostFilter filter={params.param} />
	<FilteredPostList filter={params.param} />
	</div>
)

export default HomePage;
