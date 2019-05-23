import mainConstants from './mainConstants';

export const initPage = value => ({type: mainConstants.INIT_PAGE, payload: value});

export const pageLoading = value => ({type: mainConstants.PAGE_LOADING, payload: value});

export const changeError = value => ({type: mainConstants.CHANGE_ERROR, payload: value});