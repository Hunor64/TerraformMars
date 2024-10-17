import Resource from "./Components/Resource"

const App = () => {
  return (
    <div className="container">
      <div className="PlayerName">
        <h1>PlayerName</h1>
      </div>
      <Resource name="Steel" amount={50}/>
      <Resource name="Steel" amount={50}/>
      <Resource name="Steel" amount={50}/>
    </div>
  )
}

export default App
