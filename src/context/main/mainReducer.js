import mainConstants from './mainConstants';

export const mainInitialState = {
    value: '',
    data: [],
    loading: false,
};

export default (state, action) => {
    switch (action.type) {
        case mainConstants.INIT_PAGE:
            return {...state, data: action.payload};

        case mainConstants.PAGE_LOADING:
            return {...state, loading: action.payload};

        case mainConstants.ADD_VALUE_IN_OBJECT:
            return {...state, value: action.payload};

        default:
            return state;
    }
};