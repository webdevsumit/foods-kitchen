import React from 'react';
import {Link} from 'react-router-dom';

function Screen1(){
	return(
		<div className="Screen1">
		
			<h1>Welcome to {"Food's"}</h1>
			<h1> Kitchen</h1>
			
			<Link to='/menu'>
				<button className="menu-btn">GO TO MENU</button>
			</Link>
			
		</div>
	);
}

export default Screen1;
