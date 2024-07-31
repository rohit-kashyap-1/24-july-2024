import logo from './logo.svg';
import './App.css';

import Card from './components/Card';


//functional component
function App() {
  return (
   <div className='container py-4'>
    <div className='row'>
      <div className='col-md-3'>
        <Card title="Web Designing service" content="web designing" price={1000} />
      </div>
      
      <div className='col-md-3'>
        <Card title="Web Development" content="web development" />
      </div>
      <div className='col-md-3'>
        <Card title="digital Marketing" content="DM" />
      </div>
      <div className='col-md-3'>
        <Card title="Graphics Designing" content="Graphics" />
      </div>

    </div>
   </div>
  );
}

export default App;


