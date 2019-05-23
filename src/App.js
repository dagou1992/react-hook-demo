import React, {useContext, useEffect, useState} from 'react';
import {context} from "./context";
import * as mainAction from "./context/main/mainAction";
import {getJson} from "./util";

function useInitPage(initUrl, {state, dispatch}) {
    const [res, setRes] = useState(null);
    const [url, setUrl] = useState(initUrl);

    const addValue = url => setUrl(url);

    useEffect(() => {
        let ignore = false;
        const getData = async () => {
            try {
                dispatch(mainAction.pageLoading(true));
                const res = await getJson(url, {value: state.value});
                if (!ignore) {
                    setRes(res);
                }
                dispatch(mainAction.initPage(res));
                dispatch(mainAction.pageLoading(false));
            } catch (err) {
                if (!ignore) {
                    dispatch(mainAction.changeError(err.message));
                }
            }
        };
        getData();
        return () => { ignore = true };
    }, [url, dispatch]);

    return [res, addValue];
}

function App() {
    const initUrl = '/pool/query';
    const {state, dispatch} = useContext(context).main;
    const [res, addValue] = useInitPage(initUrl, {state, dispatch});

    useEffect(() => {
        if (state.error !== '') {
            alert(state.error);
        }
    }, [state.error]);

    return (
        <div>
            <div>
                <button onClick={() => addValue(initUrl + '?bagName=224-truck2_2019-05-09-14-28-19_41-0')}>user</button>
                {res && res.map(item =>
                    <p key={item.id}>{item.bagName}</p>
                )}
            </div>
        </div>
    );
}

export default App;
