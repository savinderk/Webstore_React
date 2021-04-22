import React from 'react';
import './css/Header.css';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const AnchorToggle = React.forwardRef(({ children, onClick }, ref) => (
	<a
	  href="#"
	  className="p-2 small"
	  ref={ref}
	  onClick={(e) => {
		e.preventDefault();
		onClick(e);
	  }}
	>
	  {children}
	  &#x25bc;
	</a>
));

const InlineDropDown = React.forwardRef(({children}, ref) => (
	<ButtonGroup className="mr-3" ref={ref}>
		{children}
	</ButtonGroup>
));

function Header() {
	return (
		<div className="header-area">
		<div className="container">
			<div className="row">
			<div className="col-md-8" >
				<div className="user-menu">
				<ul>
					<li>
					<a href="#">
						<FontAwesomeIcon icon="user" /> My Account
					</a>
					</li>
					<li>
					<a href="#">
						<FontAwesomeIcon icon="heart" /> Wishlist
					</a>
					</li>
					<li>
					<a href="cart.html">
						<FontAwesomeIcon icon="shopping-cart" /> My Cart
					</a>
					</li>
					<li>
					<a href="#">
						<FontAwesomeIcon icon="credit-card" /> Checkout
					</a>
					</li>
					<li>
					<a href="#">
						<FontAwesomeIcon icon="sign-in-alt" /> Login
					</a>
					</li>
				</ul>
				</div>
			</div>
			</div>
		</div>
		</div>
	);
  }

export default Header;
