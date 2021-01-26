import React, {useContext} from 'react';
import {AppContext} from './App';
import {FaFeather} from 'react-icons/fa';

const SiteLinks = () => {
	const {state:{siteLinks,showSiteLinks}} = useContext(AppContext);
	return (
		showSiteLinks && 
		<div className='site-links'>
			<ul>
				{siteLinks.map((link) => {
						return (
							<div className='tooltip'>
								<li key={link.id}>{link.title}</li>
								<span className='tooltip-section'>
									{link.title}
									<ul>
										{link.subtitles.map((subtitle) => {
												return (
													<li key={subtitle.id}><FaFeather/> {subtitle.title}</li>	
												);
											})}
									</ul>
								</span>	
							</div>
						);
					})}
			</ul>
		</div>			
	);
}

export default SiteLinks;