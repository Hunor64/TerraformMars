/* eslint-disable no-irregular-whitespace */
import React from "react"

type ResourceProps = {
    name: string
    amount: number
}

const Resource: React.FC<ResourceProps> = ({ name, amount }) => {
    const [count, setCount] = React.useState(amount)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count === 0) return
        setCount(count - 1)
    }

    return (
        <div className="Resource">
            <div className="buttonContainer">
                <button className="button" onClick={handleDecrement}>
                    -
                </button>
                <p>
                    {name}: <span>{count}</span>
                </p>
                <button className="button" onClick={handleIncrement}>
                    +
                </button>
            </div>
        </div>
    )
}

export default Resource
