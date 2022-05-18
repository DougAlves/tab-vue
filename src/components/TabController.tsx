import { useState } from "react"
import { TabButton } from "./TabButton"

interface TabControllerProps {
    statemetns: string[],
    btn_texts: string[]
}

export const TabController = (props: TabControllerProps) => {
    const [i, setI] = useState(0)
    const buttons = props.btn_texts.map((text, i) => 
        <TabButton text={text} i={i} change = {(val) => {setI(val)}} key={i}></TabButton>
    )
    return (
        <div>
            {props.statemetns[i]}
            <div className="btn">
                {buttons}
            </div>
        </div>
    )
}