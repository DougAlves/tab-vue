import { useState } from "react"
import { TabButton } from "./TabButton"

export interface TabControllerProps {
    props:
        {
            statemet: string,
            btn_text: string
        }[]
}

export const TabController = (props: TabControllerProps) => {
    const [i, setI] = useState(0)
    const buttons = props.props.map((tab, i) => 
        <TabButton text={tab.btn_text} i={i} change = {(val) => {setI(val)}} key={i}></TabButton>
    )
    return (
        <div>
            {props.props[i].statemet}
            <div className="btn">
                {buttons}
            </div>
        </div>
    )
}