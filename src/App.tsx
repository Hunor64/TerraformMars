const App = () => {
  return (
    <div className="container">
      <div className="PlayerName">
        <h1>PlayerName</h1>
      </div>
      <div className="Resource">
        <p>Steel: <span>50</span></p>
        <div className="buttonContainer">

          <button className="button">+</button>
          <button className="button">-</button>
        </div>
      </div>
    </div>
  )
}

export default App
