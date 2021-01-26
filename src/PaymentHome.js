import React, {useContext} from 'react';
import Navbar from './Navbar';
import './payment.css';
import {AppContext} from './App';

const PaymentHome = () => {
	const {state:{showMobileVersion}} = useContext(AppContext);
	return (
		<>
			<Navbar/>
			<section className='main-section'>
				<div className='content'>
					<h1>Payment infrastructure for the internet</h1>
					<p>
						Millions of companies of all sizes—from startups to Fortune 500s—use BillaPay’s 
						software and APIs to accept payments, send payouts, and manage their businesses 
						online.
					</p>
					<button>Start Now</button>
				</div>
				{showMobileVersion ||
					<div className='app-image'>
						<img src='https://react-projects-13-stripe-submenus.netlify.app/static/media/phone.58d7e3d6.svg'/>					
					</div>	
				}			
			</section>
		</>	
	);
}

export default PaymentHome;