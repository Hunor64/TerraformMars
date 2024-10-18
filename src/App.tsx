import { FormEvent, useState } from "react"
import "./app.css"
import PlayerName from "./components/PlayerName/PlayerName"
import Resource from "./components/Resource/Resource"
function App() {
    const [Megacredit, setMegacreidt] = useState(0)
    const [MegacreditProduction, setMegacreditProduction] = useState(0)

    const handleMegacreditProduction = (increment: number) => {
      setMegacreditProduction(MegacreditProduction + increment)
    }
    const handlSubmit2 = (e: FormEvent) => {
        e.preventDefault()
        setMegacreidt(Megacredit + MegacreditProduction)
        setSteel(Steel + SteelProduction)
    }

    const [Steel, setSteel] = useState(0)
    const [SteelProduction, setSteelProduction] = useState(0)
  
    const handleSteelProduction = (increment: number) => {
        setSteelProduction(SteelProduction + increment)
    }

    const handleIncrement = (
        increment: number,
        resource: number,
        setResource: (value: number) => void
    ) => {
        setResource(resource + increment)
    }


    return (
        <form onSubmit={handlSubmit2} className="container">
            <PlayerName></PlayerName>
            <Resource
                name="Megacredit"
                amount={Megacredit}
                onchange={(increment: number) =>
                    handleIncrement(increment, Megacredit, setMegacreidt)
                }
                production={MegacreditProduction}
                onchangeProductivity={handleMegacreditProduction}
            ></Resource>
            <Resource
                name="Steel"
                amount={Steel}
                onchange={(increment: number) =>
                    handleIncrement(increment, Steel, setSteel)
                }
                production={SteelProduction}
                onchangeProductivity={handleSteelProduction}
            ></Resource>

            <button type="submit" className="NextRound">
                Next Round
            </button>
        </form>
    )
}

export default App
