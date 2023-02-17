import { useState } from "react";
import { HookMemo, HookuseCallback, HookUseMemo } from "./";

export function Home() {

  const [index, setIndex] = useState<1 | 2 | 3>(1);

  return (

    <div className="App" style={{ width: "100vw", height: "100vh" }}>

      <div style={{ flexDirection: "row", width: "100%", columnGap: "1em", justifyContent: "center" }}>
        <h1 style={{ cursor: "pointer" }} onClick={()=>setIndex(1)}>1</h1>
        <h1 style={{ cursor: "pointer" }} onClick={()=>setIndex(2)}>2</h1>
        <h1 style={{ cursor: "pointer" }} onClick={()=>setIndex(3)}>3</h1>
      </div>

      <div style={{ flex: 1, alignItems: "center", padding: "1em" }}>
        {
          index == 1 ?
            <HookMemo />
            :
            index == 2 ?
              <HookUseMemo />
              :
              <HookuseCallback />
        }
      </div>
    </div>

  )
}
