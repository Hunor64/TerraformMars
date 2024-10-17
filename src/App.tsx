import PlayerName from "./Components/PlayerName/PlayerName"
import Resource from "./Components/Resource/Resource"

const App = () => {

  return (
    <div className="container">
      <PlayerName/>

      <Resource name="Megacredits" amount={0}/>
      <Resource name="Termelési sávok" amount={0}/>
      <Resource name="Acél" amount={0}/>
      <Resource name="Titán" amount={0}/>
      <Resource name="Palánták" amount={0}/>
      <Resource name="Energia" amount={0}/>
      <Resource name="Hő" amount={0}/>
    </div>
  )
}

export default App
