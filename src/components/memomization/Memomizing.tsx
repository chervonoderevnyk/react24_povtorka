import {FC, memo, useCallback, useMemo, useState} from "react";

const A1:FC<any> = memo(({foobar}) =>{
    console.log('Watch out!!!');
    foobar();
    return <div>Danger!</div>
})


const Memomizing = () => {

    console.log('Snake!');
    const [snake, setSnake] = useState(0);
    const foobar = useCallback(()=>{
//.........
    },[]);
    const arr = useMemo(()=>{
        return[];
    },[]);

    return (
        <div>
            <A1 foobar={foobar} arr={arr}/>
            <button onClick={()=>{
                setSnake(snake + 1);
            }}>
                click me
            </button>
        </div>
    );
};

export {Memomizing};