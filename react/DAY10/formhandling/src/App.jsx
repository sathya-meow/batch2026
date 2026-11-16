import { useState } from "react"
const App = () => {
      const [name, setName] = useState("") 
      const [age, setAge] = useState("")
      const [email, setEmail] = useState("")
      const [data, setData] = useState([])
  const HandleName = (e) => {
    setName(e.target.value)
  }

  const HandleAge = (e) => {
    setAge(e.target.value)
  }

  const HandleEmail = (e) => {
    setEmail(e.target.value)
  }

  const HandleClick = (e) => {
    e.preventDefault()

     if(!name||!age ||!email){
      alert("Please fill all the fields")
      return
    }

    const newData = { id: Date.now(), name: name, age: age, email: email }
    const copy = [...data]
    copy.push(newData)

    setData(copy)
    setName("")
    setAge("")
    setEmail("")

  }

   
  return (
    <>
    <form>
      <input type="text" value={name} onChange={HandleName} placeholder="Name" />
      <input type="text" value={age} onChange={HandleAge} placeholder="Age" />
      <input type="email" value={email} onChange={HandleEmail} placeholder="Email" />
      <button onClick={HandleClick}>Submit</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((e) => (
          <tr key={e.id}>
            <td>{e.name}</td>
            <td>{e.age}</td>
            <td>{e.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default App