import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import '../sass/Header.sass';

function Header() {
	return (
		<Route>
			<header className="header_login">
				<div className="contenedor">
					<h1>Clinica San Pedro</h1>
					<nav>
						<Link className="link" to="/" >
							Nosotros
						</Link>
						<Link className="link" to="/">
							Docs
						</Link>
						<Link className="link" to="/">
							Contactanos
						</Link>
						<Link className="link" to="/">
							Login
						</Link>
					</nav>
				</div>
			</header>
		</Route>
	);
}

export default Header;
