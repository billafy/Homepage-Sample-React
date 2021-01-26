import React, {useEffect, useReducer} from "react";
import PaymentHome from './PaymentHome';
import reducer from './reducer';

const screenWidth = window.innerWidth;

const defaultStates = {
	showMobileVersion : screenWidth > 762 ? false : true,
	siteLinks : [
		{id:1,title:'Products',subtitles:[
			{id:1,title:'Payment'},
			{id:2,title:'Terminal'},
			{id:3,title:'Connect'},
		]},
		{id:2,title:'Developers',subtitles:[
			{id:1,title:'Plugins'},
			{id:2,title:'Libraries'},
			{id:3,title:'Help'},
			{id:4,title:'Billing'}
		]},
		{id:3,title:'Company',subtitles:[
			{id:1,title:'About'},
			{id:2,title:'Customers'}
		]},
	],
	showSiteLinks : screenWidth > 762 ? true : false,
	showToggleLinks : false
};

export const AppContext = React.createContext();

const App = () => {
	const [state,dispatch] = useReducer(reducer,defaultStates);

	const setScreenMode = (width) => {
		if(width>762)
			dispatch({type:'SET_DESKTOP'});
		else
			dispatch({type:'SET_MOBILE'});
	}	

	const toggleSiteLinks = () => {
		dispatch({type:'TOGGLE_SITE_LINKS'});
	}
 
	useEffect(() => {
		window.addEventListener('resize',() => setScreenMode(window.innerWidth));
		return () => {
			window.removeEventListener('resize',() => setScreenMode(window.innerWidth));
		}
	});

	return (
		<AppContext.Provider value={{state,toggleSiteLinks}}> 
			<PaymentHome/>
		</AppContext.Provider>
	);	
}

export default App;