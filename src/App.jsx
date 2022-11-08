import './App.css';
import Welcome from './components/Welcome';
import Count from './components/Count';

// This is a component
// Reusable block of code that refers to part of an interface
// Defined with capitalized fx name & file name
function App() {

  // Return renders content to the page
  return (
    // This is a fragment
    <>
    Hello class!
    {/* We mount the component */}
    <Welcome />
    <Count />
    </>
  );
}

export default App;