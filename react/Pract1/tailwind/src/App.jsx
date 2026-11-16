import Navbar from "./Components/Navbar"
 const App = () => {
  return (<>

  <Navbar/>
    <Routes>
      <Route path = "/" Element = {<Home/>}/>
      <Route path = "/about" Element = {<About/>}/>
      <Route path = "/contact" Element = {<Contact/>}/>
      <Route path = "/help" Element = {<Help/>}/>
      </Routes>
    </>)
 }
export default App
