import mainConstants from './mainConstants';

export const mainInitialState = {
    error: '',
    res: [],
    url: '/pool/query',
    loading: false,
};

export default (state, action) => {
    switch (action.type) {
        case mainConstants.INIT_PAGE:
            return {...state, res: action.payload};

        case mainConstants.TO_SEARCH:
            return {...state, url: action.payload};

        case mainConstants.PAGE_LOADING:
            return {...state, loading: action.payload};

        case mainConstants.CHANGE_ERROR:
            return {...state, error: action.payload};

        default:
            return state;
    }
};