import React from 'react';
// import { useState } from 'react';

// const Header = ({open, setOpen}) => {
const Header = () => {
	// const [open, setOpen]= useState(false)
	return (
		<>
			<div className="header_dashboard">
				<div className="contenedor">
					<h2>Clínica San Pedro</h2>
					{/* <div className="btn_ops">
						<button className="ops" onClick={()=>{setOpen(!open)}}>
							<i className="fas fa-bars"></i>
						</button>
					</div> */}
					{/* <nav></nav> */}
				</div>
				{/* <div>rol</div> */}
			</div>
		</>
	);
};

export default Header;
