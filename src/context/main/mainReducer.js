import mainConstants from './mainConstants';

export const mainInitialState = {
    obj: {},
};

export default (state, action) => {
    switch (action.type) {
        case mainConstants.INIT_PAGE:
            return mainInitialState;

        case mainConstants.ADD_VALUE_IN_OBJECT:
            return {...state, obj: {...state.obj, [action.payload]: action.payload}};

        default:
            return state;
    }
};