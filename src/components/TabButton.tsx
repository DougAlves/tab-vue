
interface TabButtonProps {
    text: string,
    i: number,
    change: (i:number) => void
}

export const TabButton = (props: TabButtonProps) => {
    return (
        <button onClick={() => props.change(props.i)}>
            {props.text}
        </button>
    )
}