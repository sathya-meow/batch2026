import App from "../../App"

const Array = ({obj}) => {
  return (
    <>

    <div>
       {obj.map((e, i) => (
        <div key={i}>
          <p>Name: {e.name}</p>
          <p>Age: {e.age}</p>
          <p>City: {e.city}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default Array
