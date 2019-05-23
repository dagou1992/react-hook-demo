import React, {useContext, useEffect, useState} from 'react';
import {context} from "./context";
import * as mainAction from "./context/main/mainAction";
import {getJson} from "./util";

function useInitPage(url, {state, dispatch}) {
    const [res, setRes] = useState(null);

    useEffect(() => {
        let ignore = false;
        const getData = async () => {
            dispatch(mainAction.pageLoading(true));
            const res = await getJson(url, {value: state.value});
            if (!ignore) {
                setRes(res);
            }
            dispatch(mainAction.initPage(res));
            dispatch(mainAction.pageLoading(false));
        };
        getData();
        return () => { ignore = true };
    }, [url, state.value, dispatch]);

    return [res];
}

function App() {
    const {state, dispatch} = useContext(context).main;
    const [res] = useInitPage('/pool/query', {state, dispatch});

    return (
        <div>
            <div>
                <button onClick={() => dispatch(mainAction.addValue('user'))}>user</button>
                {res && res.map(item =>
                    <p key={item.id}>{item.bagName}</p>
                )}
            </div>
        </div>
    );
}

export default App;
