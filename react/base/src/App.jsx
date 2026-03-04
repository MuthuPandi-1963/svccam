import About from "./components/About"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Var from "./components/Var"
import {Add} from './components/Props'
function App(){
  return(
    <>
    {/* <Navbar/>
    <Navbar/>
    <Navbar/>
    <Navbar/>
    <Navbar/>
    <About/>
    <Var/> */}
    {/* <Products/> */}
    <Add  x={10} b={40} a={30}/>
    </>
  )
}

export default App

// import About from "./components/About"
// import Navbar from "./components/Navbar"
// function App(){
//   return(
//     <div>
//     <Navbar/>
//     <About/>
//     </div>
//   )
// }

// export default App