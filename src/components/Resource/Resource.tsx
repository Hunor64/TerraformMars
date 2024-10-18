/* eslint-disable no-irregular-whitespace */

type resourceProps = {
    name: string
    amount: number
    production: number
    onchange: (increment: number) => void
    onchangeProductivity: (increment: number) => void
}

const Resource = (props: resourceProps) => {
    return (
        <div className="Resource">
            <div className="buttonContainer">
                <button type="button" onClick={() => props.onchange(-1)}>
                    -
                </button>
                <p>
                    {props.name}: <span>{props.amount}</span>
                </p>
                <button type="button" onClick={() => props.onchange(1)}>
                    +
                </button>
            </div>
            <br />
            <div className="buttonContainer">
                <button
                    type="button"
                    onClick={() => props.onchangeProductivity(-1)}
                >
                    -
                </button>
                <p>
                    Production: <span>{props.production}</span>
                </p>
                <button
                    type="button"
                    onClick={() => props.onchangeProductivity(1)}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default Resource
