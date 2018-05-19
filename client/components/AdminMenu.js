import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuItem from 'client/components/MenuItem';
import { ALL_POSTS, ORDERS, MESSAGES } from '../Constants';
import '../styles/Menu.css';


const AdminMenu = () => {
	let menus = [];
	[ALL_POSTS, ORDERS, MESSAGES].forEach((item, index) => {
		menus.push(
			<NavLink to={`/admin/${item}`} key={index}>
			  <MenuItem item={item} />
			</NavLink>
		);
	});

	return (
	<div className="menu">
	  { menus }
	</div>
	);
};

export default AdminMenu;
