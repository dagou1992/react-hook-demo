import mainConstants from './mainConstants';

export const initPage = () => ({type: mainConstants.INIT_PAGE});

export const addValue = value => ({type: mainConstants.ADD_VALUE_IN_OBJECT, payload: value});