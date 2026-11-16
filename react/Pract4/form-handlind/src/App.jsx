const App = () => {
  const [showName, setShowName] = useState("")
  const [showAge, setShowAge] = useState("")
  const [showNumber, setShowNumber] = useState("")
  const [showDatas, setShowDatas] = useState([])






  const handleChangeName = () => {
    setShowName = (e.target.value)
  }
  const handleChangeAge = () => {
    setShowName = (e.target.value)
  }
  const handleChangeNumber = () => {
    setShowName = (e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault()

  }
  if (!showName || !showAge || !showNumber){
    alert("fill the form")
    return
  }

  return(<>
    <div>
      <form>
        <input type="text" placeholder = "Enter a name" onChange={handleChangeName} />
        <input type="text" placeholder = "Enter a age" onChange={handleChangeAge} />
        <input type="text" placeholder = "Enter a number" onChange={handleChangeNumber} />
        <button onClick={handleClick}>Register</button>
      </form>
    </div>
  
  
  
  </>)
}
export default App