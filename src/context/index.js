import React, { useReducer, createContext } from 'react';
import mainReducer, {mainInitialState} from './main/mainReducer';

const context = createContext({});
const reducer = {
    main: mainReducer
};

function middlewareLog(lastState, action) {
    const type = action.type.split('_')[0].toLowerCase();
    const nextState = reducer[type](lastState, action);
    console.log(
        `%c|------- redux: ${action.type} -------|`,
        `background: rgb(70, 70, 70); color: rgb(240, 235, 200); width:100%;`,
    );
    console.log('|--last:', lastState);
    console.log('|--next:', nextState);
    return nextState;
}

const Provider = props => {
    const [mainState, mainDispatch] = useReducer(middlewareLog, mainInitialState);
    const combined = {
        main: {
            state: mainState,
            dispatch: mainDispatch,
        },
    };
    return (<context.Provider value={combined}>
        {props.children}
    </context.Provider>)
};

export {context};
export default Provider;