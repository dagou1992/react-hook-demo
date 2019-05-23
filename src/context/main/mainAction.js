import mainConstants from './mainConstants';

export const initPage = value => ({type: mainConstants.INIT_PAGE, payload: value});

export const addValue = value => ({type: mainConstants.ADD_VALUE_IN_OBJECT, payload: value});

export const pageLoading = value => ({type: mainConstants.PAGE_LOADING, payload: value});