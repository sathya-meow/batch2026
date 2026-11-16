
// import { useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>{count}</h1>

//       <button onClick={() => {
//         setCount(count + 1)
//       }}>
//         Increment
//       </button>
//     </>
//   )
// }

// export default App




import { useState } from 'react'

const App = () => {

  const [count, setCount] = useState([
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 }
  ])

  return (
    <>
      <div>
        {count.map((e, i) => (
          <p key={i}>
            {e.name} : {e.age}
            
          </p>
        ))}
      </div>

      <button onClick={() => {
        setCount([...count, { name: 'suzie', age: 20 }])
      }}>
        Add Person
      </button>
    </>
  )
}

export default App

