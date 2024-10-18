import { FormEvent, useEffect, useState } from "react"
import "./app.css"
import PlayerName from "./components/PlayerName/PlayerName"
import Resource from "./components/Resource/Resource"

function App() {
  const loadResource = (resource: string) => {
    const resourceValue = localStorage.getItem(resource)
    return resourceValue ? parseInt(resourceValue) : 0
  }

  const [Megacredit, setMegacredit] = useState(loadResource("Megacredit"))
  const [MegacreditProduction, setMegacreditProduction] = useState(loadResource("MegacreditProduction"))
  const [Steel, setSteel] = useState(loadResource("Steel"))
  const [SteelProduction, setSteelProduction] = useState(loadResource("SteelProduction"))

  const handleMegacreditProduction = (increment: number) => {
    setMegacreditProduction(MegacreditProduction + increment)
  }

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setMegacredit(Megacredit + MegacreditProduction)
    setSteel(Steel + SteelProduction)
  }

  useEffect(() => {
    localStorage.setItem("Megacredit", Megacredit.toString())
  }, [Megacredit])

  useEffect(() => {
    localStorage.setItem("MegacreditProduction", MegacreditProduction.toString())
  }, [MegacreditProduction])

  useEffect(() => {
    localStorage.setItem("Steel", Steel.toString())
  }, [Steel])

  useEffect(() => {
    localStorage.setItem("SteelProduction", SteelProduction.toString())
  }, [SteelProduction])

  return (
    <form onSubmit={handleSubmit} className="container">
      <PlayerName />
      <Resource
        name="Megacredit"
        amount={Megacredit}
        onchange={(increment: number) =>
          handleIncrement(increment, Megacredit, setMegacredit)
        }
        production={MegacreditProduction}
        onchangeProductivity={handleMegacreditProduction}
      />
      <Resource
        name="Steel"
        amount={Steel}
        onchange={(increment: number) =>
          handleIncrement(increment, Steel, setSteel)
        }
        production={SteelProduction}
        onchangeProductivity={handleSteelProduction}
      />
      <button type="submit" className="NextRound">
        Next Round
      </button>
    </form>
  )
}

export default App
