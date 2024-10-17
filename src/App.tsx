import React from "react"
import PlayerName from "./Components/PlayerName/PlayerName"
import Resource from "./Components/Resource/Resource"

const App = () => {
    const [MegaCredits] = React.useState(0)
    const [TermelesiSavok] = React.useState(0)
    const [Acel] = React.useState(0)
    const [Titan] = React.useState(0)
    const [Palantak] = React.useState(0)
    const [Energia] = React.useState(0)
    const [Ho] = React.useState(0)

    return (
        <div className="container">
            <PlayerName />

            <Resource name="Megacredits" amount={MegaCredits} />
            <Resource name="Termelési sávok" amount={TermelesiSavok} />
            <Resource name="Acél" amount={Acel} />
            <Resource name="Titán" amount={Titan} />
            <Resource name="Palánták" amount={Palantak} />
            <Resource name="Energia" amount={Energia} />
            <Resource name="Hő" amount={Ho} />
        </div>
    )
}

export default App
