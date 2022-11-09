import { useState, useEffect  } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Count from './components/Count';
import Auth from './components/Auth/Auth';
import ClassExample from './components/ClassExample';
import Pokemon from './components/Pokemon';

// This is a component
// Reusable block of code that refers to part of an interface
// Defined with capitalized fx name & file name
function App() {
  console.log("app rerendered")
  // [ State Variable, Function to update it ] = useState("initial_state")
  let [ names, setNames ] = useState(["Paul", "Rene", "Mary", "Joe", "Josh", "Maddie"])

  const [ count, setCount ] = useState(0)

  // const [ testvar, setTestvar ] = useState(true)

  // setInterval(() => {
  //   if (testvar) {
  //     setTestvar(false)
  //     setCount(count + 1)
  //   } else if(!testvar) {
  //     setTestvar(true)
  //     setCount(count + 1)
  //   }
  // }, 4000);

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])

  // Return renders content to the page
  return (
    // This is a fragment
    <>
    {/* Hello class! */}
    {/* We mount the component */}
    {/* <Count /> */}
    {/* <Auth /> */}
    {/* {names.map(name => {
      return (
        <Welcome name={name} allNames={names} updateNames={setNames}/>
      )
    })} */}
    {/* <ClassExample /> */}
    {/* <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div> */}
    <Pokemon />
    </>
  );
}

export default App;