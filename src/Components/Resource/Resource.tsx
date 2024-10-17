/* eslint-disable no-irregular-whitespace */
import React from "react"

type ResourceProps = {
    name: string
    amount: number
}

const Resource: React.FC<ResourceProps> = ({ name, amount }) => {
    return (
        <div className="Resource">
            <div className="buttonContainer">
                <button className="button">-</button>
                <p>
                    {name}: <span>{amount}</span>
                </p>
                <button className="button">+</button>
            </div>
        </div>
    )
}

export default Resource
