import { useState } from "react";
function Counter(){
    const [count, setCount]=useState(0);
    function add(){
        setCount(count+1);
    }function dec(){
        setCount(count-1);
    }
    function Reset(){
        setCount(0);
    }
    return (
        <>
            <p>Counter {count}</p>
            <div>
                <button onClick={add}>Inc++</button>
                <button onClick={dec}>Dec--</button>
                <button onClick={Reset}> Reset </button>
            </div>

        </>
    );
}
export default Counter;
