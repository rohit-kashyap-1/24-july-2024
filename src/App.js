import logo from './logo.svg';
import './App.css';

//import Home from './components/Home';
import Li from './components/Li';



//functional component
function App() {
  return (
   <>
   <ul>
    <Li title="Item 1" content="content 1" />
    <Li title="Item 2"  content="content 2"/>
    <Li title="Item 3" content="content 3" />
   </ul>
   </>
  );
}

export default App;
