import { useState } from "react"

const Register = () => {
             const [name, setName] = useState("") 
              const [number, setNumber] = useState("")
              const [email, setEmail] = useState("")
              const [data, setData] = useState([])
              const [edit, setEdit] = useState(null)
          const HandleName = (e) => {
            setName(e.target.value)
          }
        
          const HandleNumber = (e) => {
            setNumber(e.target.value)
          }
        
          const HandleEmail = (e) => {
            setEmail(e.target.value)
          }

          const HandleClick = (e) => {
            e.preventDefault()
            const obj = { id: Date.now(), name, number, email }
            const copy = [...data]
            copy.push(obj)
            setData(copy)
            alert("Data added successfully")
            setName("")
            setNumber("")
            setEmail("")
          }

            const HandleDelete = (id) =>{
              const DeleteData = data.filter((e) =>e.id!== id)
              console.log(DeleteData)
              setData(DeleteData)
            }

      return (
        
        <>
          <form>
            <input type="text" value={name} onChange={HandleName} placeholder="Name" />
            <input type="text" value={number} onChange={HandleNumber} placeholder="Number" />
            <input type="email" value={email} onChange={HandleEmail} placeholder="Email" />
            <button onClick={HandleClick}>Submit</button>
         </form>
         <div>
            {data.map((e, i) => (
              <div key={i}>
                <p>Name: {e.name}</p>
                <p>Number: {e.number}</p>
                <p>Email: {e.email}</p>
                {/* <button onClick={HandleEdit}>Edit</button> */}
                <button onClick={() => HandleDelete(e.id)}>Delete</button>
              </div>
            ))}
         </div>
        </>
  )
}

export default Register
