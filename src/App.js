import React, {useContext, useEffect, useRef} from 'react';
import {context} from "./context";
import * as mainAction from "./context/main/mainAction";

function App() {
    const self = useRef();
    const {state, dispatch} = useContext(context).main;

    // componentDidMount、componentWillUnmount
    useEffect(() => {
        const timeInterval = setInterval(() => console.log(1), 1000);
        return () => clearInterval(timeInterval);
    }, []);

    // componentDidMount
    useEffect(() => dispatch(mainAction.initPage()), [dispatch]);

    // componentDidUpdate
    useEffect(() => {
        console.log(self.current);
    }, [state.obj]);

    return (
        <div>
            {JSON.stringify(state, null, 2)}
            <div>
                <button onClick={() => dispatch(mainAction.addValue('user'))}>user</button>
                <input type="text" ref={self}/>
            </div>
        </div>
    );
}

export default App;
