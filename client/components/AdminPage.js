import React from 'react';
import { Route } from 'react-router-dom';
import { ADMIN, ALL_POSTS, MESSAGES, ORDERS } from '../Constants';
import AllPostsPage from 'client/components/admin/AllPostsPage';
import MessagesPage from 'client/components/admin/MessagesPage';
import OrdersPage from 'client/components/admin/OrdersPage';
import AdminPost from 'client/containers/admin/AdminPost';
/* FIXME Our admin page needs authentication check
 * before showing anything. So this may go to
 * containers soon.
 */

const AdminPage = ({ match }) => (
	<div>
	  <Route path={`/${ADMIN}`} exact component={AllPostsPage}/>
	  <Route exact path={`/${ADMIN}/${ALL_POSTS}`} component={AllPostsPage} />
		<Route path={`/${ADMIN}/${ALL_POSTS}/:postId`} component={AdminPost} />
	  <Route path={`/${ADMIN}/${MESSAGES}`} component={MessagesPage} />
	  <Route path={`/${ADMIN}/${ORDERS}`} component={OrdersPage} />
	</div>
);

export default AdminPage;
