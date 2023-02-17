import { memo } from "react"

type props = {
    value: string
}

function SimpleLabelComponent({ value }: props) {

    console.log("simple label rerender")

    return (
        <h4>{value}</h4>
    )
}

export const SimpleMemoidLabel = memo(SimpleLabelComponent)