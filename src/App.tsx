import PlayerName from "./Components/PlayerName/PlayerName"
import Resource from "./Components/Resource/Resource"

const App = () => {
    const MegaCredits = 0
    const TermelesiSavok = 0
    const Acel = 0
    const Titan = 0
    const Palantak = 0
    const Energia = 0
    const Ho = 0

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
