const reducer = (state,action) => {
	if(action.type==='SET_DESKTOP') {
		return {...state,showMobileVersion:false,showSiteLinks:true,showToggleLinks:false};
	}
	else if(action.type === 'SET_MOBILE') {
		return {...state,showMobileVersion:true,showSiteLinks:false};
	}
	else if(action.type === 'TOGGLE_SITE_LINKS') {
		return {...state,showToggleLinks:!state.showToggleLinks};
	}
	return state;
}

export default reducer;
