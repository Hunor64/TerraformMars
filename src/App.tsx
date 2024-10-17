import PlayerName from "./Components/PlayerName/PlayerName"
import Resource from "./Components/Resource/Resource"

const App = () => {
  return (
    <div className="container">
      <PlayerName/>

      <Resource name="Steel" amount={50}/>
      <Resource name="Steel" amount={25}/>
      <Resource name="Steel" amount={0}/>
    </div>
  )
}

export default App
