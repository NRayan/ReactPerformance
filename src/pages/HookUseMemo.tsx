import { useMemo, useState } from "react";
import { SimpleMemoidLabel } from "../components";

export function HookUseMemo() {
    const [text, setText] = useState<string>("");
    const [dateList, setDateList] = useState<Date[]>([]);

    console.log("HookMemo rerender");

    const dates = useMemo(() => calculateCompatibleDates(dateList), [dateList]);

    function calculateCompatibleDates(dates: Date[]): Date[] {
        console.log("Recalculando datas compativeis");
        const compatibleDates = dates.filter(date => date.getSeconds() % 5 == 0);
        return compatibleDates;
    }

    function addItem() {
        setDateList(prevState => [...prevState, new Date()])
        return false;
    }

    return (
        <div style={{ rowGap: "10px", alignItems: "center" }}>

            <h3>Hook UseMemo</h3>

            <div style={{ rowGap: "5px" }}>
                <input value={text} onChange={(event) => setText(event.target.value)} style={{ height: "20px" }} />
                <button onClick={addItem}>add</button>
            </div>

            <div style={{ flexDirection: "row", columnGap: "15px" }}>
                <ul>
                    {
                        dateList.map((date) =>
                            <SimpleMemoidLabel value={date.toLocaleTimeString()} />
                        )
                    }
                </ul>

                <ul>
                    {
                        dates.map((date) =>
                            <SimpleMemoidLabel value={date.toLocaleTimeString()} />
                        )
                    }
                </ul>
            </div>

        </div>
    )
}