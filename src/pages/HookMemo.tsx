import { useState } from "react";
import { SimpleMemoidLabel } from "../components";

const array = [...Array(1000).keys()];

export function HookMemo() {

    const [text, setText] = useState<string>("");
    const [counter, setCounter] = useState<number>(0);

    console.log("HookMemo rerender");

    return (
        <div style={{ rowGap: "10px", alignItems: "center" }}>
            <h3>Hook Memo</h3>
            <div style={{ rowGap: "5px" }}>
                <input value={text} onChange={(event) => setText(event.target.value)} style={{ height: "20px" }} />
                <button onClick={() => setCounter(prevState => prevState + 1)}>test</button>
            </div>
            <ul>
                {
                    array.map((item) =>
                        <SimpleMemoidLabel value={item.toString()} />
                    )
                }
            </ul>
        </div>
    )
}