import React, {useContext, useEffect, useState} from 'react';
import {context} from "./context";
import * as mainAction from "./context/main/mainAction";
import {getJson} from "./util";

function useInitPage({state, dispatch, action}) {
    const [res, setRes] = useState(state.res);
    const [url, setUrl] = useState(state.url);

    const addValue = url => setUrl(url);

    useEffect(() => {
        let ignore = false;
        const getData = async () => {
            try {
                dispatch(action.pageLoading(true));
                const res = await getJson(url);
                if (!ignore) {
                    setRes(res); // 也可以不返回res
                    dispatch(action.initPage(res));
                }
                dispatch(action.pageLoading(false));
            } catch (err) {
                if (!ignore) {
                    dispatch(action.changeError(err.message));
                }
            }
        };
        getData();
        return () => { ignore = true };
    }, [url, dispatch]);

    return {res, addValue};
}

function App() {
    const {state, dispatch} = useContext(context).main;
    const {res, addValue} = useInitPage({state, dispatch, action: mainAction});

    useEffect(() => {
        if (state.error !== '') {
            alert(state.error);
        }
    }, [state.error]);

    return (
        <div>
            <div>
                <button onClick={() => addValue(state.url + '?bagName=224-truck2_2019-05-09-14-28-19_41-0')}>search</button>
                {res.map(item =>
                    <p key={item.id}>{item.bagName}</p>
                )}
            </div>
        </div>
    );
}

export default App;
