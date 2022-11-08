import { useState  } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Count from './components/Count';
import Auth from './components/Auth/Auth';

// This is a component
// Reusable block of code that refers to part of an interface
// Defined with capitalized fx name & file name
function App() {

  // [ State Variable, Function to update it ] = useState("initial_state")
  let [ names, setNames ] = useState(["Paul", "Rene", "Mary", "Joe", "Josh", "Maddie"])
  // Return renders content to the page
  return (
    // This is a fragment
    <>
    Hello class!
    {/* We mount the component */}
    {/* <Count />
    <Auth /> */}
    {names.map(name => {
      return (
        <Welcome name={name} allNames={names} updateNames={setNames}/>
      )
    })}
    </>
  );
}

export default App;