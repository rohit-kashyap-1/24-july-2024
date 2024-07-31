import logo from './logo.svg';
import './App.css';

import HomeClass from './components/HomeClass';


//functional component
function App() {
  return (
   <div className='container py-4'>
      <HomeClass price="1000" section="B" />
   </div>
  );
}

export default App;


