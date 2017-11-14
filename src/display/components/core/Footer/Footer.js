import React from 'react';

const Footer = () => (
	<footer className="footer">
		<nav className="pull-left">
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="http://www.blackjacksoftware.com">Developer</a>
				</li>
				<li>
					<a href="http://allowanceapp.tumblr.com">Support</a>
				</li>
			</ul>
		</nav>
		<p className="copyright pull-right">
			&copy; {(new Date()).getFullYear()} <a href="http://www.blackjacksoftware.com">Blackjack Software</a>
		</p>
	</footer>
);

export default Footer;
