
// const App = () => {

//   const arr =[1,2,3,4,5,6,7,8]
//   return (
//     <>
//     <div>
//       {arr.map((e,i)=>(
//         <div key={i}>
//         <p>{e}</p>
//         </div>
//       ))}
//     </div>
//     </>
//   )
// }

// export default App



// const App = () => {
//   const obj = {name: "Joe", age: 20,city: "New York"};

//   return (
//     <>
//       <div>
//         <p>Name: {obj.name}</p>
//         <p>Age: {obj.age}</p>
//         <p>City: {obj.city}</p>
//       </div>
//     </>
//   );
// };

// export default App;


import Array from "./assets/component/Array"

const App = () => {
    const arr = [{name: "Joe", age: 20, city: "New York"},{name: "Jane", age: 25, city: "Los Angeles"},
    {name: "Bob", age: 30, city: "Chicago"}];
  return (
    <>
      <Array obj={arr} />
    </>
  )
}

export default App
