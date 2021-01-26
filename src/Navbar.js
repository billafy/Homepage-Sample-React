import React, {useContext} from 'react';
import SiteLinks from './SiteLinks';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AppContext} from './App';
import {FaFeather} from 'react-icons/fa';

const Navbar = () => {
	const {state:{showMobileVersion,siteLinks,showToggleLinks},toggleSiteLinks} = useContext(AppContext);
	return (
		<nav className='navbar'>
			<h1>BillaPay</h1>
			<SiteLinks/>
			{showMobileVersion 
				?
				<div className='toggle-btn tooltip'>
					<button type='button' onClick={toggleSiteLinks}><GiHamburgerMenu/></button>
					{showToggleLinks
						&& 
						<span className='drop-down-links'> 
							{siteLinks.map((link) => {
									return (
										<div key={link.id}>
											{link.title}
											<ul>
												{link.subtitles.map((subtitle) => {
														return (
															<li key={subtitle.id}><FaFeather/> {subtitle.title}</li>	
														);
													})}
											</ul>										
										</div>	
									);
								})}
						</span>
					}
				</div>
				:
				<div className='sign-up-btn'>
					<button type='button'>Sign Up</button>
				</div>
			}			
		</nav>	
	);
}

export default Navbar;